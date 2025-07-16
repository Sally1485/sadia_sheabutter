import { Link } from "react-router"

export default function Sidebar({onCategoryChange}) {
    return (

        <div className="mt-30 flex flex-col justify-between cursor-pointer bg-white shadow-md w-fit p-4">
            <aside >
                <h1 className="text-2xl font-bold">Browse By</h1>
                <div className="border-b-2 w-36"></div>
                <div className="p-4 flex flex-col">
                    <Link to={"#"} onClick={() => onCategoryChange('All')}>All Products</Link>
                    <Link to={"#"} onClick={() =>onCategoryChange('Raw Shea')}>Raw Shea</Link>
                    <Link to={"#"} onClick={() => onCategoryChange('Body Products')}>Body Essentials</Link>
                    <Link to={'#'} onClick={() => onCategoryChange('Hair Products')}>Hair Products</Link>
      
                </div>
            </aside>
        </div>

    )
}