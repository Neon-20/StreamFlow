"use client";

import { Button } from "@/components/ui/button";
import { CheckCheck, Copy } from "lucide-react";
import { isValidElement, useState } from "react";

interface CopyButtonProps{
    value:string | null;
}

export const CopyButton = ({
    value,
}:CopyButtonProps) =>{
    const[isCopied,setIsCopied] = useState(false)

    const onCopy = () => {
        if(!value) return;

        setIsCopied(true);
        navigator.clipboard.writeText(value);
        setTimeout(()=>{
        setIsCopied(false);
        },1000)
    }

    const Icon = isCopied ? CheckCheck : Copy

    return(
        <Button
        disabled = {!value || isCopied}
        onClick={onCopy}
        size="icon"
        className="cursor-pointer"
        >
        <Icon className="h-4 w-4 cursor-pointer"/>
        </Button>
    )
}