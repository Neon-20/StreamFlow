"use server";

import { followUser, unfollowUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async(id:string) =>{
    try{
    const followedUser = await followUser(id);
    revalidatePath("/protected");

    if(followedUser){
        revalidatePath(`/protected/${followedUser.following.username}`)
    }
    return followedUser;
    }
    catch(err){
    throw new Error("Internal Error dude.")
    }
}

export const onUnFollow = async(id:string) =>{
    try{
        const unfollowedUser = await unfollowUser(id);
        revalidatePath("/protected");

        if(unfollowedUser){
            revalidatePath(`/${unfollowedUser.following.username}`)
        }
        return unfollowedUser;
    }
    catch(err){
        throw new Error("Internal Error dude.")
    }
}



