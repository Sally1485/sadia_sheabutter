import { Link } from "react-router";
import { ShoppingBag, User, Search, MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import LogoImage from '../assets/images/logo2.png';



export default function Navbar() {
    const [menuMobileOpen, setmenuMobileOpen] = useState(false);



    return (
        <div className="relative">
            <nav className=" fixed top-0 left-0 right-0 z-50 bg-Green text-white shadow-md flex items-center justify-between px-4 md:px-10 py-2">

                <div className="flex items-center" ><Link to={'/'}>
                    <img src={LogoImage} alt="" className="w-20 h-20 object-cover bg-white rounded-full" />
                </Link></div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8  font-medium uppercase">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/shop'}>Shop</Link>
                    <Link to={'/about'}>Our Story</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>


                {/* <div className="flex flex-col ">
                    <div className="flex items-center gap-2">
                        <Search />
                        <h1 className="">search...</h1>
                    </div>
                    <input type="search" name="search" id="search" className="border-b-2 outline-none" />
                </div> */}

                {/* Search Icon and Shopping Icon  */}
                <div className="flex flex-row justify-between gap-4 md:gap-10 ">


                    <Link to={'#'} className="flex flex-row gap-2">
                        <  User />
                        <span>LOG IN</span>
                    </Link>
                    <Link to={'#'}><ShoppingBag /></Link>

                    {/* Hamburger Menu Icon */}
                    <div>
                        <button className="md:hidden outline-none" onClick={() => setmenuMobileOpen(!menuMobileOpen)}>{menuMobileOpen ? <XIcon /> : <MenuIcon />}</button>
                    </div>

                </div>
                {/* Mobile Menu */}
                {menuMobileOpen && (
                    <div className="md:hidden absolute flex flex-col border border-amber-400 px-6 py-4  top-full bg-Green shadow-md  z-50 text-white justify-between gap-4 w-full uppercase">
                        <Link to={'#'}>Home</Link>
                        <Link to={'#'}>Shop</Link>
                        <Link to={'#'}>Our Story</Link>
                        <Link to={'#'}>Contact</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}