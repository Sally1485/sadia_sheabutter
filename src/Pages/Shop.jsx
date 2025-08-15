import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import SalesCard from "../components/SalesCard";
import { useState } from "react";
import '@fontsource/poppins';
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import TestImage from '../assets/images/shea.jpg';
import ProductsData from "../Data/Products";
import Aos from "aos";
import "aos/dist/aos.css";




export default function Shop() {
    const [selectCategory, SetSelectCategory] = useState('All Products');

    // Handle Category change
    const HandleCategorychange = (category) => {
        SetSelectCategory(category);
    };

    // Filter products
    const FilteredProducts = selectCategory === 'All Products' ? ProductsData : ProductsData.filter(product => product.category === selectCategory);



    return (
        <div>
            <Navbar />
            <div className="mt-40 md:mr-12 flex items-center w-[90%] mx-auto  font-light">
                <Link to={'/'} className="font-light" data-aos="fade-down">Home</Link>
                <div><ChevronRight /></div>
                {/* selecting category */}
                <div className="font-light">{selectCategory}</div>

            </div>
            <div className="flex flex-col md:flex-row gap-6 w-[90%] mx-auto">
                <Sidebar onCategoryChange={HandleCategorychange} />
                <section className="md:mt-10  flex-1  rounded-lg ">
                    <div className="">
                        <h1 className="text-2xl md:text-4xl font-medium " data-aos="zoom-in">{selectCategory}</h1>
                        <div className="flex flex-col md:flex-row justify-between gap-6  m-4 pt-4 md:pt-6">
                            <div >
                                <h1>{FilteredProducts.length} products </h1>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* filteration by sorting */}
                                <label htmlFor="label-items">Sort by:</label>
                                <select name="recommendation"
                                    id="recommendation"
                                    className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                                    <option value="1">Recommended</option>
                                    <option value="2">Newest</option>
                                    <option value="3">Price(low to high)</option>
                                    <option value="4">Price(high to low)</option>
                                    <option value="5">Name A-Z</option>
                                    <option value="6">Name Z-A</option>
                                </select>
                            </div>
                        </div>

                        {/* select Category */}
                        <div className="grid  md:grid-cols-4 pt-8" data-aos="fade-right">
                            {FilteredProducts.map(product => {
                                return (
                                    <SalesCard key={product.id} id={product.id} salesImage={product.image} name={product.name} category={product.category} price={product.price} />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}







<div className="min-h-screen bg-gray-50 px-4 py-6">
    <Navbar />
    <div className="flex flex-col md:flex-row gap-6">
        <Sidebar />

        <section className="flex-1 bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                    <span className="text-sm text-gray-600">13 products</span>
                    <select
                        name="Recommendation"
                        id="recommendation"
                        className="border border-gray-300 rounded-md px-3 py-1 text-sm "
                    >
                        <option value="1">Cream</option>
                        <option value="2">Soap</option>
                        <option value="3">Sidebar</option>
                    </select>
                </div>
            </div>

            {/* Product list would go here */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
            </div> */}
        </section>
    </div>
</div>
