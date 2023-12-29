"use client";

import { Input } from "@/components/ui/input";
import { CopyButton } from "./copy-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface KeyCardProps{
    value:string | null;
}

export const KeyCard = ({
    value,
}:KeyCardProps) =>{
    //default key is hidden
    const[show,setShow] = useState(false);
    
    const onShow = () =>{
        setShow(!show);
    }

    return(
        <div className="rounded-xl bg-[#111827] p-6 text-white">
        <div className="flex items-center gap-x-6">
            <p className="font-semibold shrink-0">
            Stream Key
            </p>
            <div className="space-y-4 w-full">
            <div className="w-full flex items-center gap-x-4">
            <Input 
            value={value || ""}
            type={show ? "text":"password"}
            disabled
            className="bg-[#111827] border-slate-400/40 text-slate-500"
            />
            <CopyButton
            value={value||""}
            />
            </div>
            </div>
            <button
            onClick={onShow} 
            data-text={show ? "Hide 🫣" : "Reveal 🔐"} 
        className="btn font-semibold z-50 hidden lg:block">
            {show ? "Hide 🫣" : "Reveal 🔐"}
        </button>
        
        </div>
        </div>
    )
}