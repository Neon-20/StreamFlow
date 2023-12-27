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

export const blockUser = async(id:string) =>{
    const self = await getSelfUser();

    if(self.id === id){
        throw new Error("User can't block himself")
    }

    const otherUser = await db.user.findUnique({
        where:{id}
    })

    if(!otherUser){
        throw new Error("User Not Found")
    }

    const existingBlock = await db.block.findUnique({
        where:{
            blockerId_blockedId:{
                blockerId:self.id,
                blockedId:otherUser.id
            }
        }
    })

    if(existingBlock){
        throw new Error("User already blocked");
    }

    const block = await db.block.create({
        data:{
            blockerId:self.id,
            blockedId:otherUser.id
        },
        include:{
            blocked:true,
        }
    })
    return block;
}


export const unblockUser = async(id:string) =>{
    const self = await getSelfUser();
    if(self.id === id){
        throw new Error("User can't unblock himself")
    }
    const otherUser = await db.user.findUnique({
        where:{
            id
        }
    })

    if(!otherUser){
        throw new Error("User not Found");
    }

    const existingbBlock = await db.block.findUnique({
        where:{
            blockerId_blockedId:{
                blockedId:otherUser.id,
                blockerId:self.id
            }
        }
    }) 

    if(!existingbBlock){
        throw new Error("This User is not blocked")
    }

    const unBlock = await db.block.delete({
        where:{
            id:existingbBlock.id
        },
        include:{
            blocked:true,
        }
    })
    return unBlock;
}