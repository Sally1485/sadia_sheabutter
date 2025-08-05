import { Link } from "react-router";
import { ShoppingBag, User, Search, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import LogoImage from '../assets/images/logo2.png';
import '@fontsource/poppins';
import CartPage from "../Pages/CartPage";


export default function Navbar() {
    const [menuMobileOpen, setmenuMobileOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="relative">
            <nav className=" fixed top-0 left-0 right-0 z-50 bg-Green text-white shadow-md flex items-center justify-between px-4 md:px-10 py-2">

                <div className="flex items-center" ><Link to={'/'}>
                    <img src={LogoImage} alt="" className="w-20 h-20 object-cover bg-white rounded-full" />
                </Link></div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 font-medium uppercase">
                    <Link to={'/'} className="hover:text-amber-300">Home</Link>
                    <Link to={'/shop'}  className="hover:text-amber-300">Shop</Link>
                    <Link to={'/about'}  className="hover:text-amber-300">Our Story</Link>
                    <Link to={'/contact'}  className="hover:text-amber-300">Contact</Link>
                </div>



                {/* Search Icon and Shopping Icon  */}
                <div className="hidden md:flex flex-row justify-between items-center gap-4 md:gap-10 ">


                    <div className="flex flex-row gap-2">
                        <Link to={'/sign-up'} >
                        <  User  className="hover:text-amber-300" />
                        </Link>
                        <Link to={'/login'}> <span  className="hover:text-amber-300">LOG IN</span></Link>
                    </div>
                    <Link onClick={() => setIsOpen(!isOpen)} className="hover:text-amber-300"><ShoppingBag /></Link>
                </div>
                   

                    {/* Hamburger Menu Icon */}
                    <div>
                        <button className="md:hidden outline-none" onClick={() => setmenuMobileOpen(!menuMobileOpen)}>{menuMobileOpen ? <XIcon /> : <MenuIcon  className="hover:text-amber-300" />}</button>
                    </div>

             {menuMobileOpen && (
  <div className="md:hidden absolute top-full w-full z-50 bg-green-700 shadow-md border border-amber-400 text-white px-6 py-4 flex flex-col gap-4 uppercase">
    
    {/* Navigation Links */}
    <Link to="/" className="hover:text-amber-300">Home</Link>
    <Link to="/shop" className="hover:text-amber-300">Shop</Link>
    <Link to="/about" className="hover:text-amber-300">Our Story</Link>
    <Link to="/contact" className="hover:text-amber-300">Contact</Link>

    {/* Divider */}
    <div className="border-t border-white/20 my-2"></div>

    {/* Auth + Cart Section */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link to="/sign-up">
          <User className="hover:text-amber-300" />
        </Link>
        <Link to="/login">
          <span className="hover:text-amber-300">LOG IN</span>
        </Link>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="hover:text-amber-300">
        <ShoppingBag />
      </button>
    </div>
  </div>
)}

</nav>

{isOpen && (
  <div className="fixed top-20 right-10 z-40 p-4 w-80 h-auto bg-white rounded shadow-lg">
    <CartPage />
  </div>
)}
</div>
)
}
