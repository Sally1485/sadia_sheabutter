import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/NavBar";
import { useRef, useState, } from "react";
import SalesCard from "../components/SalesCard";
import Footer from "../components/Footer";
import { useCart, } from "../context/CartContext";
import '@fontsource/poppins';
import { Link, useParams } from "react-router";
import ProductsData from "../Data/Products";




export default function ViewProduct() {
  const scrollRef = useRef(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  // handle quantity increase
  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  }

  // handle quantity decrease
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // handle change in quantity
  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value || 1))
    setQuantity(value)
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const { id } = useParams();
  const product = ProductsData.find((item) => item.id === Number(id));
  if (!product) return <p>Product not found.</p>;


  return (
    <div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <section className="pt-28 px-0 w-[80%] mx-auto">
        <span className="flex flex-row items-center cursor-pointer mb-2">
          <ChevronLeft />
          <Link to={"/shop"} className="text-lg font-medium">
            Back
          </Link>
        </span>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between md:gap-10">
          <div className="md:w-1/2 pt-10 ">
            <img
              src={product.image}
              className="w-full md:w-[500px] md:max-h-[500px] shadow-md object-cover h-auto max-h-[300px]"
              alt={product.name}
            />
          </div>

          {/* Text and Controls */}
          <div className="md:w-1/2 flex flex-col gap-4 md:pt-16 ">
            <p className="hidden">{product.id}</p>
            <h1 className="text-2xl font-bold md:text-3xl">{product.name}</h1>

            {/* <img src={product.image} alt={product.alt} /> */}
            <p className="text-lg/7 font-light pt-2 pb-2">Category: {product.category}</p>
            <h3 className="text-lg font-semibold ">Gh₵{product.price}</h3>
            <p className="text-lg/7 font-light pt-2 pb-2">
              {product.description}
            </p>
            <div className="flex flex-col">
              <h2 className="font-semibold mb-1 items-center">Quantity</h2>
              <div className="flex items-center space-x-2">

                <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 focus:outline-none" disabled={quantity === 1} onClick={handleDecrease}>-</button>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={handleQuantityChange}
                  className="w-20 rounded px-2 py-1 border border-green-700 text-center"

                />
                <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 focus:outline-none" onClick={handleIncrease}>+</button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="w-full px-6 py-2 border border-green-700 hover:bg-green-700 text-green-700 hover:text-white transition duration-300"
                >
                  Add to Cart
                </button>

              </div>

              <div>
                <Link to={"/check-out"} state={{ product, quantity }}>
                  <button className="w-full px-6 py-2 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition duration-300">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20">
        <div>
          <h1 className="text-3xl font-bold">You May Also Like</h1>
        </div>

        <div className="px-4 py-10 bg-white">
          <div className="relative">

            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-green-700 shadow-md rounded-full z-10 hidden md:block"
            >
              <ChevronLeft />
            </button>

            {/* Scrollable Horizontal Container */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory scroll-smooth px-8"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div

                  key={item}
                  className="snap-center shrink-0 w-[300px] bg-white rounded-xl shadow-md p-4"
                >
                  <SalesCard />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-green-700 shadow-md rounded-full z-10 hidden md:block"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}