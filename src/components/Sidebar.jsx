import { Link } from "react-router";
import '@fontsource/poppins';

export default function Sidebar({onCategoryChange}) {
    return (

        <div className="mt-5 flex flex-col justify-between cursor-pointer  w-fit p-4">
            <aside >
                <h1 className="text-2xl font-light ">Browse by</h1>
                <div className="border-b border-gray-400 w-36 pt-4 text-gray-400"></div>
                <div className="pt-4 flex flex-col justify-between gap-4 font-light">
                    <Link to={"#"} className="hover:underline" onClick={() => onCategoryChange('All Products')}>All Products</Link>
                    <Link to={"#"} className="hover:underline" onClick={() =>onCategoryChange('Shea Products')}>Shea Products</Link>
                    <Link to={"#"} className="hover:underline" onClick={() => onCategoryChange('Body Products')}>Body Essentials</Link>
                    <Link to={'#'} className="hover:underline" onClick={() => onCategoryChange('Hair Products')}>Hair Products</Link>
      
                </div>
            </aside>
        </div>

    )
}