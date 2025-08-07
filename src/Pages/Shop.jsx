import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import SalesCard from "../components/SalesCard";
import { useState } from "react";
import '@fontsource/poppins';
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import TestImage from '../assets/images/shea.jpg'


const ProductsData = [
    { id: 1, name: 'Butter',price:'$300', category: 'Soap Products', image: TestImage  },
    { id: 2, name: 'U Hair', price:'$200', category: 'Hair Products',image: TestImage  },
    { id: 3, name: 'Lizzy Cream', price:'$100', category: 'Body Products', image: TestImage },
    { id: 4, name: 'plain Shea', price:'$400', category: 'Soap Products', image: TestImage },
    { id: 5, name: 'Soft Hair', price:'$600', category: 'Hair Products',image: TestImage },
    { id: 6, name: 'Soft Skin', price:'$1600', category: 'Body Products', image: TestImage },
    { id: 7, name: 'Plant Shea', price:'$900', category: 'Soap Products',image: TestImage },
    { id: 8, name: 'Many Hair', price:'$800', category: 'Hair Products', image: TestImage },
    { id: 9, name: 'Brown Skin', price:'$600', category: 'Body Products',image: TestImage },
]

export default function Shop() {
        const [SelectCategory, SetSelectCategory] = useState('All Products');

        const HandleCategorychange = (category) => {
           SetSelectCategory(category); 
        };

        const FilteredProducts = SelectCategory ==='All Products' ? ProductsData : ProductsData.filter(product => product.category === SelectCategory);



    return (
        <div>
            <Navbar />
            <div className="mt-40 md:mr-12 flex items-center w-[90%] mx-auto  font-light">
              <Link to={'/'} className="font-light">Home</Link>
                <div><ChevronRight /></div>
                <div className="font-light">{SelectCategory }</div>

            </div>
            <div className="flex flex-col md:flex-row gap-6 w-[90%] mx-auto">
                <Sidebar onCategoryChange={HandleCategorychange} />
                <section className="md:mt-10  flex-1  rounded-lg ">
                    <div className="">
                        <h1 className="text-2xl md:text-4xl font-medium ">{SelectCategory }</h1>
                        <div className="flex flex-col md:flex-row justify-between gap-6  m-4 pt-4 md:pt-6">
                            <div>
                                <h1>{FilteredProducts.length } products </h1>
                           </div>
                            <div className="flex items-center gap-2">
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
                    
                        <div className="grid  md:grid-cols-4 pt-8">
                            {FilteredProducts.map(product => {
                                return (
                                    <SalesCard key={product.id} salesImage={product.image} name={product.name} category={product.category} price={product.price} buttonText={product.buttonText} />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <ProductCard /> etc. */}
            </div>
        </section>
    </div>
</div>
