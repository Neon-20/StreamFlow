"use client"
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import {motion} from "framer-motion";

interface CollapseProps{
    children:React.ReactNode
}

const Collapse = ({children}:CollapseProps) => {
    const {close} = useSideBar((state)=>state); 
    
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