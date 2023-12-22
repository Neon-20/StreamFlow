"use client"

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSideBar } from "@/store/use-sidebar";
import { ArrowLeft, ArrowLeftFromLine, ArrowRight } from "lucide-react";

export const Toggle = () => {
    const {
        close,
        onOpen,
        onClose,
    } = useSideBar((state)=>state)

    // const badge = close ? "Expand":"Collapsed"
    return ( 
        <>
        {close && (
            <div className="hidden md:flex
            w-full items-center justify-center
            pt-4 mb-4">
                <Button 
                variant="ghost"
                className="p-4 text-white"
                onClick={onOpen}  
                >
                <ArrowRight className="h-4 w-4"/>
                </Button>
            </div>
        )}
        {!close && (
            <div className="p-6 pl-8 mb-2 flex items-center
            w-full">
            <p className="font-semibold text-white">
            For You
            </p>
            <Button className="h-auto ml-auto p-2"
            variant="ghost"
            onClick={onClose}
            >
                <ArrowLeftFromLine
                className="h-4 w-4"
                />
            </Button>
            </div>
        )}
        </>
    );
}


export const ToggleSkeleton = () =>{
    return(
        <div className="p-6 pl-8 mb-2 hidden lg:flex
        items-center justify-between
        w-full">
        <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
	    <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
	    <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
	    <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
	    <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
        </svg>
        </div>
    )
}

