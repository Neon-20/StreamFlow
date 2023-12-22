import { useSideBar } from "@/store/use-sidebar";
import Collapse from "./collapsable";
import {Recommended, RecommendedSkeleton} from "./recommended";
import { Toggle } from "./toggle";
import { getRecommended } from '@/lib/recommended';

export const SideBar = async() => {
//fetch data
//fetch recommended lists and followers

const recommended = await getRecommended();
    return ( 
        <Collapse>
        {/* Any server component here */}
        <Toggle/>
        <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended
        data = {recommended}
        />
        </div>
        </Collapse>
    );
}   

export const SideBarSkeleton = () =>{
    return(
        <aside className="fixed -left-2 top-16 flex flex-col
        w-[70px] lg:p-4 lg:w-60 h-full bg-[#111827]
        ">
        <RecommendedSkeleton/>
        </aside>
    )
}