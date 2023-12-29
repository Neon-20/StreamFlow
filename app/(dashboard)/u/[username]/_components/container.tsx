"use client";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";
import { useCreatorSideBar } from "@/store/use-creator-sidebar";
import { cn } from "@/lib/utils";

interface ContainerProps{
    children:React.ReactNode
}

export const Container = ({
    children,
}:ContainerProps) =>{
    const {close,onClose,onOpen} = useCreatorSideBar((state)=>state)
    
    const matches = useMediaQuery(`(max-width: 1024px)`) 

    useEffect(()=>{
    if(matches){
        onClose();
    }
    else{
        onOpen();
    }
    },[matches,onClose,onOpen]);


    return(
        <div
        className={cn("flex-1",
        close ? "ml-[70px]" : "ml-[70px] lg:ml-60"
        )}
        >
            {children}
        </div>
    )
}