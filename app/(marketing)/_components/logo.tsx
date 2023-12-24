import Link from "next/link";
import Image from "next/image";
import {Poppins} from "next/font/google";
import { cn } from "@/lib/utils";
import { Heart } from "./heart";
import { useRouter } from "next/navigation";
import { useState } from "react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200","300","400","500","600", "700"],
})

// const headingFont = localFont({
// src:"../public/font.woff2",
// })

const Logo = () => {
    
    return ( 
        <div className="justify-between flex items-center mr-6 mt-2 cursor-pointer">
        <div className="hover:opacity-200/10 transition items-center
        gap-x-2 p-2 hidden md:flex cursor-pointer">
        <Image
        src="/logo.png"
        alt="Logo"
        width="40"
        height="40"
        className="cursor-pointer"
        />
        <p className="text-xl text-white font-semibold text-transparent cursor-pointer">
        StreamFlow
        </p>
        </div>
        <Heart/>
        </div>
);
}

export default Logo;