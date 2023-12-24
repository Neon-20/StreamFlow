import { db } from "./db";
import { getSelfUser } from "./auth-service";

export const isBlockedByUser = async(id:string) =>{
    try{
    const self = await getSelfUser();
    const otherUser = await db.user.findUnique({
        where:{
            id,
        }
    })
    if(!otherUser){
        throw new Error("User Not Found");
    }
    if(otherUser.id === self.id){
        return false;
    }
    const existingBlock = await db.block.findUnique({
        where:{
            blockerId_blockedId: //Faster querying
            {
                blockerId:otherUser.id,
                blockedId:self.id
            }
        },
    })
    return !!existingBlock;

} catch{
    return false;
}

}