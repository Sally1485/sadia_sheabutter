import { Link } from "react-router";
import '@fontsource/poppins';
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ onCategoryChange }) {
    const [menuMobileOpen, setmenuMobileOpen] = useState(false);
    return (

        <div className=" mt-5 flex flex-col justify-between cursor-pointer  w-fit p-4">
            <aside className="hidden md:block" >
                <h1 className="text-2xl font-light ">Browse by</h1>
                <div className="border-b border-gray-400 w-36 pt-4 text-gray-400"></div>
                <div className="pt-4 flex flex-col justify-between gap-4 font-light">
                    <Link to={"#"} className="hover:underline" onClick={() => onCategoryChange('All Products')}>All Products</Link>
                    <Link to={"#"} className="hover:underline" onClick={() =>onCategoryChange('Soap Products')}>Soap Products</Link>
                    <Link to={"#"} className="hover:underline" onClick={() => onCategoryChange('Skin Products')}>Skin Products</Link>
                    <Link to={'#'} className="hover:underline" onClick={() => onCategoryChange('Hair Products')}>Hair Products</Link>
      
                </div>
            </aside>
            
             {/* Icons */}
                <div>
                    <button className="md:hidden outline-none" onClick={() =>setmenuMobileOpen (!menuMobileOpen)}> {menuMobileOpen ? <X /> : <Menu /> }
                        
                    </button>
                </div>

            {menuMobileOpen && (
            <aside className="md:hidden" >
                <h1 className="text-2xl font-light ">Browse by</h1>
                <div className="border-b border-gray-400 w-36 pt-4 text-gray-400"></div>
                <div className="pt-4 flex flex-col justify-between gap-4 font-light">
                    <Link to={"#"} className="hover:underline" onClick={() => onCategoryChange('All Products')}>All Products</Link>
                    <Link to={"#"} className="hover:underline" onClick={() =>onCategoryChange('Soap Products')}>Soap Products</Link>
                    <Link to={"#"} className="hover:underline" onClick={() => onCategoryChange('Skin Products')}>Skin Products</Link>
                    <Link to={'#'} className="hover:underline" onClick={() => onCategoryChange('Hair Products')}>Hair Products</Link>
      
                    </div>
                     </aside>
      )}

               
           

        </div>

    )
}