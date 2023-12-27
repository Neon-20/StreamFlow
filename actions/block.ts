"use server"

import { blockUser, unblockUser } from "@/lib/block-service"
import { revalidatePath } from "next/cache";


export const onBlock = async(id:string) =>{
// todo: Adapt to disconnect from livestream
// todo: adapt to disconnect the guest as well.

    const blockedUser = await blockUser(id);
    
    revalidatePath("/protected");
    if(blockedUser){
    revalidatePath(`/protected/${blockedUser.blocked.username}`);
    }

    return blockedUser;

}   

export const onUnBlock = async(id:string)=>{
    const unBlockedUser = await unblockUser(id);
    
    revalidatePath("/protected");
    if(unBlockedUser){
    revalidatePath(`/protected/${unBlockedUser.blocked.username}`);
    }
    return unBlockedUser;
}