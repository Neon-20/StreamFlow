"use client"

import { Button } from "@/components/ui/button";
import { useCreatorSideBar } from "@/store/use-creator-sidebar";
import { ArrowLeftFromLine, ArrowRight, ArrowRightToLine } from "lucide-react";

export const Toggle = () => {
    const {close,onClose,onOpen} = useCreatorSideBar((state)=>state)


    return ( 
    <>
    {close && (
        <div className="hidden lg:flex
        w-full items-center justify-center
        pt-4 mb-4">
            <Button 
                variant="ghost"
                className="p-2 ml-2 text-white"
                onClick={onOpen} 
                >   
                <ArrowRightToLine className="h-4 w-4"/>
        </Button>
        </div>
    )}
    {!close && (
            <div className="p-6 pl-8 mb-2 flex items-center
            w-full">
            <p className="font-medium text-primary hidden lg:flex text-white">
            Dashboard
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

