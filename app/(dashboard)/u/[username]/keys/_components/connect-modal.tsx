"use client";

import { Button } from "@/components/ui/button";
import { Dialog,DialogClose,DialogContent,DialogHeader,DialogFooter,DialogDescription, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import {Alert,AlertTitle,AlertDescription} from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { IngressInput } from "livekit-server-sdk";
import { useState } from "react";

const RTMP = String(IngressInput.RTMP_INPUT)
const WHIP = String(IngressInput.WHIP_INPUT)

type IngressType = typeof RTMP | typeof WHIP


export const ConnectModal = () =>{
    const[IngressType,setIngressType] = useState<IngressType>(RTMP)

    return(
        <Dialog>
            <DialogTrigger asChild> 
                <Button variant={"primary"}>Generate connection</Button>
            </DialogTrigger>
            <DialogContent className="bg-black text-white">
                <DialogHeader>
                    <DialogTitle>
                    Generate Connections
                    </DialogTitle>
                </DialogHeader>
                <Select>
                    <SelectTrigger className="w-full bg-black">
                    <SelectValue placeholder = "Ingress Type"/>
                    </SelectTrigger>
                    <SelectContent className="bg-black">
                        <SelectItem className="bg-black text-white" value = "RTMP">RTMP</SelectItem>
                        <SelectItem className="bg-black text-white" value = "WHIP">WHIP</SelectItem>
                    </SelectContent>
                </Select>
                <Alert>
                <AlertTriangle />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                This action will reset all active streams using the connection.
                </AlertDescription>
                </Alert>
                <div className="flex justify-between">
                    <DialogClose>
                        <Button variant="ghost" size="sm">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                    variant={"primary"} size="sm">
                        Generate
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}