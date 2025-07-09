import { Link } from "react-router";
import { ShoppingBag, User, Search, MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";


export default function Navbar() {
    const [menuMobileOpen, setmenuMobileOpen] = useState(false);



    return (
        <nav className=" flex flex-row justify-around md:p-6 p-4 md:gap-10 fixed top-0 left-0 right-0 bg-amber-700 text-white  ">

            <div className="" ><Link to={'#'}>LOGO</Link></div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-row justify-between gap-10 uppercase">
                <Link to={'#'}>Home</Link>
                <Link to={'#'}>Shop</Link>
                <Link to={'#'}>Our Story</Link>
                <Link to={'#'}>Contact</Link>
            </div>
       

        <div className="flex flex-col ">
                    <div className="flex items-center gap-2">
                        <Search />
                        <h1 className="">search...</h1>
                    </div>
                    <input type="search" name="search" id="search" className="border-b-2 outline-none" />
                </div>

            {/* Search Icon and Shopping Icon  */}
            <div className="flex flex-row justify-between gap-4 md:gap-10 ">
               

                <Link to={'#'} className="flex flex-row gap-2">
                 <  User />
                 <span>LOG IN</span>
                 </Link>
                <Link to={'#'}><ShoppingBag /></Link>
                 
                   {/* Hamburger Menu Icon */}
            <div>
                <button className="md:hidden outline-none" onClick={() => setmenuMobileOpen(!menuMobileOpen)}>{menuMobileOpen ? <XIcon/> : <MenuIcon />}</button>
            </div>
            
            </div>
               {/* Mobile Menu */}
            {menuMobileOpen && (
            <div className="md:hidden flex flex-col border border-amber-400 fixed right-[0px] top-12 bg-white justify-between gap-5 uppercase">
                <Link to={'#'}>Home</Link>
                <Link to={'#'}>Shop</Link>
                <Link to={'#'}>Our Story</Link>
                <Link to={'#'}>Contact</Link>
            </div>
            )}
        </nav>
    )
}