import { Skeleton } from "@/components/ui/skeleton";
import { ToggleCardSkeleton } from "./_components/toggle-card";

const LoadingToggle = () =>{
    return(
        <div className="p-8 space-y-6">
        <Skeleton className="h-10 w-[200px] bg-[#111827]"/>
        <div className="space-y-4">
        <ToggleCardSkeleton/>
        <ToggleCardSkeleton/>
        <ToggleCardSkeleton/>
        </div>
        </div>
    )
}

export default LoadingToggle;