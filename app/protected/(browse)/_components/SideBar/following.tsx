"use client";

import { useSideBar } from "@/store/use-sidebar";
import { Follow,User } from "@prisma/client";
import { UserItem } from "./userItem";

interface FollowingProps{
    data: (Follow & {following:User})[];
}

export const Following = ({
    data,
}:FollowingProps) =>{
    const {close} = useSideBar((state)=>state)
    
    if(!data.length){
        return null;
    } 
    

    return(
        <div>
        {!close && (
            <div className="pl-6 mb-4 ml-2">    
                <p className="text-md font-medium text-muted-foreground">Following</p>
            </div>
        )}
        <ul className="space-y-2 p-2">
        {data.map((follow)=>(
            <UserItem
            key={follow.following.id}
            username = {follow.following.username}
            imageUrl = {follow.following.imageUrl}
            />
        ))}
        </ul>
        </div>
    )
}