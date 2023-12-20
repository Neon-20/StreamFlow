import {NavBar} from "./_components/NavBar";
import {SideBar} from "./_components/SideBar";

const BrowseLayout = ({
    children,
}:{
    children:React.ReactNode
}) => {
    return ( 
        <>
        <NavBar/>
        <div className="flex h-full pt-24">
        <SideBar/>
        {children}
        </div>
        </>
    );
}

export default BrowseLayout;