"use client";

import { Button } from "@/components/ui/button";
import { onFollow, onUnFollow } from "@/actions/follow";
import { useTransition } from "react";
import {toast} from "sonner";
import { onBlock, onUnBlock } from "@/actions/block";

interface ActionProps{
    isFollowing:boolean,
    userId:string,
}

export const Actions = ({
    isFollowing,
    userId,
}:ActionProps) => {

const [isPending,startTransition] = useTransition();

const handleFollow = () => {
    startTransition(()=>{
    onFollow(userId)
    .then((data)=>toast.success(`You are now following ${data.following.username}, tune in now 🚀`,{
        duration: 2000,
    }))
    .catch(()=>toast.error("You can't follow same person again.",{ duration: 2000}))
})
}
const handleUnfollow = () => {
    startTransition(()=>{
    onUnFollow(userId)
    .then((data)=>toast.success(`You have successfully unfollowed ${data.following.username}`,{
        duration: 2000,
    }))
    .catch(()=>toast.error("You can't unfollow same person again.",{ duration: 2000}))
})
}

const onClick = () =>{
    if(isFollowing){
        handleUnfollow();
    }
    else{
        handleFollow();
    }
}

const handleBlock = () =>{
    startTransition(()=>{
        onBlock(userId)
        .then((data)=>
        toast.success(`${data.blocked.username} was blocked successfully`)
        )
        .catch(()=> toast.error("Something went wrong"))
    })
}

const handleUnBlock = () =>{
    startTransition(()=>{
        onUnBlock(userId)
        .then((data)=>
        toast.success(`${data.blocked.username} is Unblocked successfully`)
        )
        .catch(()=>
        toast.error("Something went wrong")
        )
    })
}

// const onClickBlock = () =>{
//     if(isBlocked){
//         handleUnBlock();
//     }
//     else{
//         handleBlock()
//     }
// }


    const buttonText = isFollowing ? "Unfollow" : "Follow"

    return ( 
        <>
        <button 
        disabled = {isPending}
        onClick={onClick}
        className="Btn"
        data-text = {buttonText}    
        >
            {buttonText}
        </button>
        <Button variant={"secondary"} disabled = {isPending} size="sm" className="w-48"
        onClick={handleBlock}
        >
            Block
        </Button>
        </>
    );
}

