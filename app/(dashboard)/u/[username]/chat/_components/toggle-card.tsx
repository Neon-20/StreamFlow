"use client";

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useTransition } from "react";
import { updateStream } from "@/actions/stream";
import { Skeleton } from "@/components/ui/skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly"

interface ToggleCardProps{
    label:string,
    value:boolean,
    field:FieldTypes
}

export const ToggleCard = ({
    label,
    value = false,
    field
}:ToggleCardProps) => {  
    const [isPending,startTransition] = useTransition();

    const onChange = () => {
        // try {
        // await startTransition(() => {
        //     updateStream({ [field]: !value });
        //     toast.success("Chat settings updated");
        // });
        // } catch (error) {
        // toast.error("Something went wrong");
        // console.error("An error occurred:", error);
        // }
        startTransition(()=>{
            updateStream({[field]: !value})
            .then(()=>
            toast.success("Chat Settings Updated")
            )
            .catch(()=>
            toast.error("Something went wrong")
            )
        })
    };
    
    return ( 
        <div className="rounded-xl bg-[#111827] p-4 text-white">
        <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>   
        <div className="space-y-2 p-2">
        <Switch
        disabled={isPending}
        onCheckedChange={onChange}
        checked={value}
        className="ml-4"
        >
            {value ? "on":"off"}
        </Switch>
        </div>
        </div>
        </div>
    );
}


export const ToggleCardSkeleton = () =>{
    return(
        <Skeleton
        className="rounded-xl p-10 bg-[#111827]"
        />
    )
}