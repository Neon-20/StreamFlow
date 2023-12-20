import Link from "next/link";
import Image from "next/image";
import {Poppins} from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200","300","400","500","600", "700"],
})

// const headingFont = localFont({
// src:"../public/font.woff2",
// })

export const Logo = () => {
    return ( 
        <Link href="/">
        <div className="flex items-center
        hover:opacity-50 transition">
        <div className="p-1 mr-10 shrink-0 lg:mr-0 lg:shrink">
        <Image
        src="/logo.png"
        alt="Logo"
        width="32"  
        height="32" 
        className="cursor-pointer sm:flex"
        />
        </div>
        <div className={cn("hidden lg:block",poppins.className)}>
        <p className="text-lg text-white font-semibold text-transparent p-2 cursor-pointer">
        StreamFlow
        </p>
        </div>
        </div>
        </Link>
);
}
