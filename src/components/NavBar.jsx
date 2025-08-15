import { Link } from "react-router";
import { ShoppingBag, User, Search, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import LogoImage from '../assets/images/logo2.png';
import '@fontsource/poppins';
import CartPage from "../Pages/CartPage";
import { useCart } from "../context/CartContext";
import Aos from "aos";
import "aos/dist/aos.css";



export default function Navbar() {
    const [menuMobileOpen, setmenuMobileOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="relative">
            <nav className=" fixed top-0 left-0 right-0 z-50 bg-Green text-white shadow-md flex items-center justify-between px-4 md:px-10 py-2">

                <div className="flex items-center" ><Link to={'/'}>
                    <img src={LogoImage} alt="" className="w-20 h-20 object-cover bg-white rounded-full" data-aos="fade-right" />
                </Link>
                </div>

                <div className="flex space-x-8 font-medium uppercase">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 font-medium uppercase" data-aos="fade-left">
                        <Link to={'/'} className="hover:text-amber-300">Home</Link>
                        <Link to={'/shop'} className="hover:text-amber-300">Shop</Link>
                        <Link to={'/about'} className="hover:text-amber-300">Our Story</Link>
                        <Link to={'/contact'} className="hover:text-amber-300">Contact</Link>

                    </div>


                    <div data-aos="fade-left">
                        <Link onClick={() => setIsOpen(!isOpen)} className="hover:text-amber-300">
                            {totalItems > 0 && (
                                <span className="absolute top-7 right-21 bg-[#9C88FF] text-white rounded-full px-2 text-sm">
                                    {totalItems}
                                </span>
                            )}
                            <ShoppingBag /></Link>
                    </div>



                    <div>
                        <button className="md:hidden outline-none" onClick={() => setmenuMobileOpen(!menuMobileOpen)}>{menuMobileOpen ? <XIcon /> : <MenuIcon className="hover:text-amber-300" />}</button>
                    </div>
                </div>

                {menuMobileOpen && (
                    <div className="md:hidden absolute top-full w-full z-50 bg-green-700 shadow-md border border-amber-400 text-white px-6 py-4 flex flex-col gap-4 uppercase" data-aos="fade-left">

                        {/* Navigation Links */}
                        <Link to="/" className="hover:text-amber-300">Home</Link>
                        <Link to="/shop" className="hover:text-amber-300">Shop</Link>
                        <Link to="/about" className="hover:text-amber-300">Our Story</Link>
                        <Link to="/contact" className="hover:text-amber-300">Contact</Link>

                        {/* Divider */}
                        <div className="border-t border-white/20 my-2"></div>

                        {/* Auth + Cart Section */}
                        <div className="flex justify-between items-center">

                        </div>
                    </div>
                )}


            </nav>

            {isOpen && (
                <div>
                    <CartPage />
                </div>
            )}
        </div>
    )
}
