"use client";
import { useSideBar } from "@/store/use-sidebar";
import {User} from "@prisma/client";
import {UserItem, UserItemSkeleton} from "./userItem";

interface RecommendedProps{
    data:User[];
}

export const Recommended = ({data}:RecommendedProps) => {
    const {close} = useSideBar((state)=>state);

    // console.log(data.length);
    const show = !close && data.length > 0
    
    return ( 
    
        <div>
        {show && (
        <div className="pl-6 mb-4 ml-2">
        <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
        )}
        <ul className="space-y-4 p-4">
        {data.map((user)=>(
            <UserItem
            key={user.id}
            username = {user.username}
            imageUrl = {user.imageUrl}
            isLive = {true}
            />
        ))}
        </ul>
        </div>
    );
}

export const RecommendedSkeleton = () =>{
    return(
        <ul className="px-2 ">
        {/* <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
	    <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
	    <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
	    <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
	    <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
        </svg> */}
        {[...Array(2)].map((_,i)=>(
            <UserItemSkeleton key={i}/>
        ))}
        </ul>
    )
}
