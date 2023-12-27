import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Actions = async() => {

    const user = await currentUser();
    return ( 
        <div className="flex items-center justify-end gap-x-2 ml-4
        lg:ml-0">
        {!user && (
            <SignInButton>
                <button className = "btn-login hover:text-gray-400">
                Join Now
                </button>
            </SignInButton>
        )}
        {!!user && (
            <div className="flex items-center gap-x-2">
                <Button
                size="sm"
                variant="ghost"
                className="text-muted-foreground
                hover:text-primary hover:animate-pulse"
                asChild
                >
                <Link href={`/u/${user.username}`}>
                    <Clapperboard
                    className="h-5 w-5 lg:mr-2 "
                    />
                    <span className="hidden md:block text-md">
                    Dashboard
                    </span>
                </Link>
                </Button>
                <UserButton
                afterSignOutUrl="/protected"
                />
            </div>
        )}
        </div>
    );
}

export default Actions;