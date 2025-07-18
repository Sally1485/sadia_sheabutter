import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/NavBar";
import BgImage6 from "../assets/images/bg-6.jpg"
import { Link } from "react-router";
import { useRef, useState } from "react";
import SalesCard from "../components/SalesCard";
import Footer from "../components/Footer";
import ProductImage from '../assets/images/img-1.jpg';




export default function ViewProduct() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

   const [isModalOpen, setIsModalOpen] = useState(false);

    const OpenModal = () => setIsModalOpen(true);
    const CloseModal = () => setIsModalOpen(false);



  return (
    <div>
     <div className="relative z-10">
       <Navbar  />
     </div>
      <section className="pt-28 px-0 w-[80%] mx-auto">
        <span className="flex flex-row items-center cursor-pointer mb-2">
          <ChevronLeft />
          <h1 className="text-lg font-medium">Back</h1>
        </span>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between  md:gap-10">
          <div className="md:w-1/2 pt-10 ">
            <img src={BgImage6} className=" w-full   md:w-[500px] md:max-h-[500px] object-cover h-auto max-h-[300px]" alt="" />
          </div>
          {/* Text and Controls */}
          <div className="md:w-1/2 flex flex-col gap-4 md:pt-15 ">
            <h2 className="text-3xl font-bold">Shea Butter</h2>
            <h3 className="text-lg font-semibold">Ghc 12.00</h3>
            <p className="text-lg/7 font-light pt-2 pb-2" >Neem Dream is our African black soap facial cleanser featuring Nokware’s holy grail acne fighting, hyperpigmentation rockstar ingredient neem oil. Think of neem dream as your work horse facial cleanser; the one you reach for when you really want something that’s going to do a thorough job of removing oil, clearing acne and helping hyperpigmentation.

              We love neem dream as well because we know some skin types find traditional traditional African black soap to be a bit harsh so we added glycerin into the formulation to make it a bit more gentle.

              We’ll have you dreaming about Neem Dream once you’ve tried it!</p>
            <div className="flex flex-col">
              <h2 className="font-medium mb-1">Quantity</h2>
              <input type="number" defaultValue='1' min='1' className="w-20 rounded px-2 py-1 border border-brown text-center " />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <button className="w-full px-6 py-2 border border-Green hover:bg-brown text-Green hover:text-white" onClick={OpenModal} >Add to Cart</button>
              </div>

              {isModalOpen && (
                <div  className="fixed inset-0 bg-gradient-to-br from-green-600 to-white bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50"
    onClick={CloseModal}>

                  <div  className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full"
                    onClick={(e) => e.stopPropagation()} >
                    
                    {/* This is  Modal Content */}
                       <div className="w-[90%] mx-auto flex justify-between">
                                  <div className="flex flex-row justify-between gap-6">
                                      <div className='w-1/2'>
                                          <img src={ProductImage } alt="" className='w-full   md:w-[500px] md:max-h-[500px] object-cover h-auto max-h-[200px]' />
                                      </div>
                                      
                                      <div className="flex flex-col ">
                                          <h2 className="text-xl font-bold ">Shea Soaps Single Bar</h2>
                                          <h3 className="pt-2">Ghc 12.00</h3>
                                           <div className="flex flex-col pt-2">
                                    <h2 className="font-medium mb-1 pt-2">Quantity</h2>
                                    <input type="number" defaultValue='1' min='1' className="w-20 rounded px-2 py-1 border border-brown text-center " />
                                  </div>
                                          <div>
                                      <Link><button className="w-full px-6 py-2 border border-Green hover:bg-brown text-Green hover:text-white pt-4">Add to Cart</button></Link>
                                    </div>
                                      </div>
                                  </div>
                           </div>   
                  </div>
                </div>
                )}

              <div>
                <Link><button className=" w-full px-6 py-2 border border-Green text-Green hover:bg-brown hover:text-white">Buy Now</button></Link>
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
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-Green shadow-md rounded-full z-10 hidden md:block"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-Green shadow-md rounded-full z-10 hidden md:block"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}