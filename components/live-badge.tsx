import { cn } from "@/lib/utils";

interface LiveBadgeProps{
    className?:string
}

export const LiveBadge = ({
    className,
}:LiveBadgeProps) => {
    return ( 
        <div className={cn(
            "bg-rose-500 text-center px-1 rounded-md uppercase text-[10px] border border-background tracking-wide font-semibold",
            className
        )}>
        <p className="text-xs">LIVE</p>
        </div>
    );
}

