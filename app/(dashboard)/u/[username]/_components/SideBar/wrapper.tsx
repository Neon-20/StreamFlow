"use client";

import { cn } from "@/lib/utils";
import { useCreatorSideBar } from "@/store/use-creator-sidebar";

interface WrapperProps{
    children:React.ReactNode
}


export const Wrapper = ({
    children,
}:WrapperProps) => {
    const {close} = useCreatorSideBar((state)=>state);
    
    return ( 
        <aside  
        className={cn("fixed -left-2 top-16 h-full flex flex-col bg-[#111827] w-[70px] lg:w-60 border-[#111827] border-opacity-100 border-r z-50 text-white",
        close && "lg:w-[70px]")}
        >
        {children}  
        </aside>
        
    );
}

