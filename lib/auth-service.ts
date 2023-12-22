//We are creating this to store current user
import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const getSelfUser = async() =>{
    const self = await currentUser();
    if(!self || !self.username){
        throw new Error("UnAuthorized");
    }
    const users = await db.user.findUnique({
        where:{
            externalUserId:self.id
        }
    })
    if(!users){
        throw new Error("User Not Found");
    }
    return users;
}