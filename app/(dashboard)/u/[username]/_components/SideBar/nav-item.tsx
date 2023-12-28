"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCreatorSideBar } from "@/store/use-creator-sidebar"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface NavItemProps{
    label:string,
    href:string,
    icon:LucideIcon,
    isActive:boolean,
}

export const NavItem = ({
    label,
    href,
    icon:Icon,
    isActive
}:NavItemProps) =>{
    const {close} = useCreatorSideBar((state)=>state)

    return(
        <Button
        asChild
        variant="ghost"
        className={cn(
        "w-full h-12 hover:bg-slate-800 hover:text-white",
        close ? "justify-center" : "justify-start",
        isActive && "bg-slate-800 "
        )}
        >
        <Link href={href}>
            <div className="flex items-center gap-x-4">
            <Icon className={cn("h-4 w-4",
            close ? "mr-0":"mr-2"
            )}/>
            {!close && <span>{label}</span>}
            </div>
        </Link>
        </Button>
    )
}


export const NavigationItemSkeleton = () =>{
    return(
    <li className="flex items-center px-14">
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
