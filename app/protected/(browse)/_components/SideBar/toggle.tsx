"use client"

import { Button } from "@/components/ui/button";
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

