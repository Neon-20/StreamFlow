"use server";
import { getSelfUser } from "@/lib/auth-service";
import { db } from "@/lib/db";
//acts like an api route basically
import { Stream } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateStream = async(values:Partial<Stream>) =>{
    try{
    const self = await getSelfUser();
    const selfStream = await db.stream.findUnique({
    where:{userId:self.id}
    })

    if(!selfStream){
        throw new Error("Stream Not Found")
    }

    const valid = {
        values:values.name,
        isChatEnabled:values.isChatEnabled,
        isChatDelayed:values.isChatDelayed,
        isChatFollowersOnly:values.isChatFollowersOnly
    }

    const updateStream = await db.stream.update({
        where:{
            id:selfStream.id,
        },
        data:{
            ...valid
        }
        
    });
    revalidatePath(`/u/${self.username}/chat`)
    revalidatePath(`/u/${self.username}`)
    revalidatePath(`/protected/${self.username}`)
    }
    catch{
    throw new Error("Internal Error")
    }
}