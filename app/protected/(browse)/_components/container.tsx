"use client";

import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import { useEffect } from "react";
import {useMediaQuery} from "usehooks-ts";

interface ContainerProps{
    children:React.ReactNode
}

const Container = ({children}:ContainerProps) => {
    const{
        close,
        onOpen,
        onClose
    } = useSideBar((state)=>state)
    const matches = useMediaQuery("(max-width: 1024px)");
    useEffect(()=>{
        if(matches){
            onClose();
        }
        else onOpen();
    },[matches,onOpen,onClose]);

    return ( 
        <div className={cn("flex-1",
        close ? "ml-[70px]" : "ml-[70px] lg:ml-60")}>
        {children}
        </div>
    );
}

export default Container;