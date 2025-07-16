import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import SalesCard from "../components/SalesCard";
import { useState } from "react";


const ProductsData = [
    { id: 1, name: 'Butter',price:'$300', category: 'Raw Shea',  buttonText: 'Add to cart' },
    { id: 2, name: 'U Hair', price:'$200', category: 'Hair Products',  buttonText: 'Add to cart' },
    { id: 3, name: 'Lizzy Cream', price:'$100', category: 'Body Products',  buttonText: 'Add to cart' },
    { id: 4, name: 'plain Shea', price:'$400', category: 'Raw Shea',  buttonText: 'Add to cart' },
    { id: 5, name: 'Soft Hair', price:'$600', category: 'Hair Products',  buttonText: 'Add to cart' },
    { id: 6, name: 'Soft Skin', price:'$1600', category: 'Body Products',  buttonText: 'Add to cart' },
    { id: 7, name: 'Plant Shea', price:'$900', category: 'Raw Shea',  buttonText: 'Add to cart' },
    { id: 8, name: 'Many Hair', price:'$800', category: 'Hair Products',  buttonText: 'Add to cart' },
    { id: 9, name: 'Brown Skin', price:'$600', category: 'Body Products',  buttonText: 'Add to cart' },
]

export default function Shop() {
        const [SelectCategory, SetSelectCategory] = useState('All');

        const HandleCategorychange = (category) => {
           SetSelectCategory(category); 
        };

        const FilteredProducts = SelectCategory ==='All' ? ProductsData : ProductsData.filter(product => product.category === SelectCategory);



    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-6">
                <Sidebar onCategoryChange={HandleCategorychange} />
                <section className="mt-30 flex-1 bg-white rounded-lg shadow-md p-6">
                    <div className="">
                        <h1 className="text-2xl font-bold">All Products</h1>
                        <div className="flex justify-between m-4">
                            <span className="text-sm">13 products</span>
                            <select name="recommendation"
                                id="recommendation"
                                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600">
                                <option value="1">cream</option>
                                <option value="2">Soap</option>
                                <option value="3">Sidebar</option>
                            </select>
                        </div>

                        {/* select Category */}
                        <div >

                        </div>




                        <div className="grid grid-cols-4">
                            {FilteredProducts.map(product => {
                                return (
                                    <SalesCard key={product.id} name={product.name} category={product.category} price={product.price} buttonText={product.buttonText} />
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
