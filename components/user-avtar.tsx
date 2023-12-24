import { cva,type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import{
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import { LiveBadge } from "@/components/live-badge";

//create avatar sizes
const avatarSizes = cva(
    "",
    {
        variants:{
            size:{
                default:"h-8 w-8",
                lg:"h-14 w-14"
            }
        },
        defaultVariants:{
            size:"default"
        }
    }
)


interface UserAvatarProps
extends VariantProps<typeof avatarSizes>
{
    username:string,
    imageUrl:string,
    isLive?:boolean,
    showBadge?:boolean
}

export const UserAvatar = ({
    username,
    imageUrl,
    isLive,
    showBadge,
    size
}:UserAvatarProps) => {
    const canShowBadge = showBadge && isLive;

    return ( 
        <div className="relative">
        <Avatar
        className={cn(
            isLive && "ring-2 ring-red-600 border border-background",
            avatarSizes({size})
        )}
        >
            <AvatarImage src={imageUrl}
            className="object-cover"/>  
            <AvatarFallback>
                {username[0]}
                {username[username.length-1]}
            </AvatarFallback>
        </Avatar>
        {canShowBadge && (
            <div className="absolute -bottom-3 left-1/2
            transform -translate-x-1/2
            ">
                <LiveBadge/>
            </div>
        )}
        </div>
    );
}

interface UseAvatarSkeletonProps
extends VariantProps<typeof avatarSizes>{
}

export const UserAvatarSkeleton = ({
    size,
}:UseAvatarSkeletonProps) =>{
    return(
        // <Skeleton
        // className={cn(
        // "rounded-full",
        // avatarSizes({ size })
        // )}
        // />
        <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
	<circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
	<circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
	<circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
	<circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
    </svg>
    )
}

