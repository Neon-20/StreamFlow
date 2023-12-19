import Actions from "./actions";
import {Logo} from "./logo";
import {SearchInput} from "./search";

const NavBar = () => {
    return ( 
        <nav className="text-white fixed top-0 h-16 w-full z-[49] bg-[#111827]
        px-2 lg:px-4 flex justify-between items-center shadow-sm">
        <Logo/>
        <SearchInput/>
        <Actions/>        
        </nav>
    );
}

export default NavBar;