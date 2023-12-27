//This is a server component
import { getSelfUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import { NavBar } from "./_components/NavBar";
import { SideBar } from "./_components/SideBar";
import { Container } from "./_components/container";

interface CreatorLayoutProps{
    params:{username:string},
    children:React.ReactNode
}

const CreatorLayout = async({
    params,
    children,
}:CreatorLayoutProps) => {
    const self = await getSelfUsername(params.username);

    if(!self){
        redirect("/protected")
    }
    
    return ( 
        <>
        <NavBar/>
        <div className="flex h-full pt-20">
        <SideBar/>
        <Container>
        {children}
        </Container>
        </div>
        </>
    );
}

export default CreatorLayout;