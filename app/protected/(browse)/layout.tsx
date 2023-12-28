import { Suspense } from "react";
import {NavBar} from "./_components/NavBar";
import {SideBar} from "./_components/SideBar";
import Container from "./_components/container";
import { SideBarSkeleton } from './_components/SideBar/index';



const BrowseLayout = ({
    children,
}:{
    children:React.ReactNode
}) => {
    return ( 
        <>
        <NavBar/>
        <div className="flex h-full pt-24">
        <Suspense fallback={<SideBarSkeleton/>}>    
        <SideBar/>
        </Suspense>
        <Container>
        {children}
        </Container>
        </div>
        <NavBar/>
        {/* <div className="flex h-full pt-24">
        <Suspense fallback={<SideBarSkeleton/>}>    
        <SideBar/>
        </Suspense>
        <Container>
        {children}
        </Container>
        </div> */}
        </>
    );
}

export default BrowseLayout;