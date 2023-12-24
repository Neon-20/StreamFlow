"use client"
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { useIsClient } from "usehooks-ts";

interface CollapseProps{
    children:React.ReactNode
}

const Collapse = ({children}:CollapseProps) => {
    const isClient = useIsClient();
    const {close} = useSideBar((state)=>state); 
    
    if(!isClient){
        return (
        <aside
        className="fixed -left-2 top-16 h-full flex flex-col bg-[#111827] w-60 border-r border-[#111827] border-opacity-100 z-50 text-white"
        >
        <ToggleSkeleton/>
        <RecommendedSkeleton/>
        </aside>
        )
    }

    
    return ( 
    <aside
    className={cn("fixed -left-2 top-16 h-full flex flex-col bg-[#111827] w-60 border-r border-[#111827] border-opacity-100 z-50 text-white",
    close && "w-[70px]")}
    >
    {children}
    </aside>
    );
}

export default Collapse;