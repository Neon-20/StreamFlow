import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";

const Actions = async() => {
    
    return ( 
    <div className="flex items-center justify-end gap-x-2">
        <Button
        size="sm"
        variant="ghost"
        className="text-sm text-muted-foreground hover:text-primary hover:animate-pulse"
        asChild
        >
            <Link href="/protected">
                <LogOut className="h-4 w-4 mr-2"/>
                Exit
            </Link>
        </Button>
        <UserButton
        afterSignOutUrl="/protected"
        />
    </div>
    );
}

export default Actions;