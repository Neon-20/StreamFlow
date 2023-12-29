"use client";

import { usePathname } from "next/navigation";
import { db } from "@/lib/db";
import { useSideBar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {UserAvatar} from "@/components/user-avtar";
import { LiveBadge } from "@/components/live-badge";

interface UserItemProps{
    username:string
    imageUrl: string
    isLive?: boolean
}

export const UserItem = ({
    username,
    imageUrl,
    isLive
}:UserItemProps ) => {
    const pathname = usePathname();
    const {close} = useSideBar((state)=>state)
    const href = `/protected/${username}`
    
    const isActive = pathname === href
    // if they are currently seeing the stream of the user in the sidebar

    return ( 
        <Button
        asChild
        variant="ghost"
        className={cn("w-full h-12 hover:bg-slate-800/100",
        close ? "justify-center hover:bg-[#111827] hover:opacity-70":"justify-start",
        isActive && "bg-slate-800",
        isActive && close && "bg-[#111827]"
        )}
        >
        <Link href={href}>
        <div 
        className={cn("w-full flex items-center gap-x-2",
        close && "flex flex-col justify-center mb-4",
        )}>
            <UserAvatar
            username = {username}
            imageUrl = {imageUrl}
            isLive = {isLive}
            // showBadge
            />
            {!close && (
                <p className="truncate text-slate-300 p-2 text-base font-sans">{username}</p>
            )}
            {!close && isLive && (
                <LiveBadge className="ml-auto"/>
            )}
            {close && isLive && (
                <LiveBadge/>
            )}
        </div>
        </Link>
        </Button>
    );
}

//Here is we are defining the skeleton for the userItem
export const UserItemSkeleton = () =>{
    return(
    <li className="flex items-center gap-x-4 px-6 py-2">
        {/* <Skeleton className="min-h-[32px] min-w-[32px] rounded-full"/>
    <div className="flex-1">
    <Skeleton className="h-6"/>
    </div> */}
    <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
	<circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
	<circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
	<circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
	<circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
    </svg>
    </li>
    )
}

