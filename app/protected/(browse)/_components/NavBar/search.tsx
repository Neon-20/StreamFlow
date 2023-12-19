"use client";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { SearchIcon,X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const SearchInput = () => {
    const router = useRouter();
    const[value,setValue] = useState("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if(!value) return;
        const url = qs.stringifyUrl({
            url:"/search",
            query:{term:value}
        },{skipEmptyString:true})
        router.push(url);
    }
    //clearing the input

    const onClear = () =>{
        setValue("")
    }

    return ( 
        <form
        onSubmit={onSubmit}
        className="bg-[#111827] relative w-full lg:w-[400px] flex items-center gap-x-1"
        >
        <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Here"
        className="bg-[#111827]
        focus-visible:ring-0 focus-visible:ring-transparent
        focus-visible:ring-offset-0 rounded-md border-gray-500"
        />
        {value && (<X
        className="absolute top-2 right-16 h-5 w-5 
        cursor-pointer text-muted-foreground hover:opacity-75
        transition"
        onClick={onClear}
        />)}
        <Button
        type="submit"
        variant="ghost"
        size="sm"
        className="bg-[#111827] rounded-md"
        >
            <SearchIcon
            />        
        </Button>
        </form>
    );
}
