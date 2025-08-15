import Navbar from "../components/NavBar";
import Footer from '../components/Footer';
import SalesCard from "../components/SalesCard";
import { useState, useEffect } from "react";
import BgImage1 from '../assets/images/bg-1.jpg';
import BgImage2 from '../assets/images/bg-2.jpg';
import BgImage3 from '../assets/images/bg-3.jpg';
import BgImage4 from '../assets/images/bg-4.jpg';
import BgImage6 from '../assets/images/hair.jpg';
import BgImage7 from '../assets/images/skin1.jpg';
import BgImage8 from '../assets/images/soap.jpg';
import { Link } from "react-router";
// import './index.css'
import SubmitButton from "../components/SubmitButton";
// Supports weights 200-900
import '@fontsource-variable/source-sans-3';
import FilterrButton from "../components/FilterButton";
import Aos from "aos";
import "aos/dist/aos.css";




export default function Home() {
  // Images on the hero section
  const images = [
    BgImage1,
    BgImage2,
    BgImage3,
    BgImage4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (

    <div >
      <Navbar />
      {/* Hero section */}
      <div className="h-[70vh] md:h-[100vh] bg-cover bg-center transition-all duration-1000 ease-in-out bg-fixed  "
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <div className="h-full w-full bg-black/40 flex flex-col  items-center justify-center  ">
          <h1 className="text-white text-3xl md:text-4xl text-center font-bold pt-20 md:pt-8 " data-aos="fade-right">Beauty Rooted in Nature</h1>
          <p className="italic text-brown text-center mt-4 text-sm md:text-xl handwritten " data-aos="fade-left">Raw. Pure. Powerful. Shea butter for everyday glow</p>
          <Link to={'/shop'} className="mt-6" data-aos="fade-down"> <SubmitButton title={"Shop Now"}  /> </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="pt-16 bg-white ">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brown" data-aos="fade-down">About Us</h2>
          <p className="text-sm md:text-base  leading-relaxed" data-aos="zoom-in">
            At <span className="font-bold"  >Khalimatu Sadia Enterprise</span>, our journey with shea butter is both personal and rooted in rich tradition.
            Founded by <span className="font-bold">Mrs. Sadia Alidu</span>—a physically challenged educator and entrepreneur—inspired by generations of women in agro-processing,
            our business is committed to crafting pure, handcrafted shea butter and its by-products.
            <br /><br />
            Based in the heart of the Northern Region of Ghana, we transform locally sourced shea nuts into nourishing soaps, creams, and pomades.
            But our mission goes beyond skincare—it's about empowering women and persons with disabilities while honoring a legacy of sustainable shea production.
          </p>
          <div className="mt-8" data-aos="fade-right">
            <Link to="/about">
              <SubmitButton title="Read More" />
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="pt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brown" data-aos="zoom-in-left">Shop Our Favorites</h2>
        <div className="flex flex-col md:flex-row justify-between md:w-[80%] md:mx-auto md:gap-10  items-start md:pt-20">

          {/* Soap Products Section */}
          <div className="md:w-1/2 flex flex-col md:items-center md:justify-center px-4 md:px-8 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-aos="fade-left">Soap Products</h2>
            <p className="text-center text-sm md:text-base leading-relaxed " data-aos="zoom-in">
              Shea butter is a natural fat extracted from the nuts of the shea tree, found primarily in West Africa.
              Rich in vitamins A, E, and F, it’s widely known for its deeply moisturizing and healing properties.
              <br /><br />
              For skin, shea butter soothes dryness, reduces inflammation, fades scars, and improves elasticity—making it suitable for all skin types.
              When applied to hair, it nourishes the scalp, strengthens strands, reduces breakage, and promotes healthy growth and shine.
              Its natural richness makes it a trusted remedy for both beauty and wellness.
            </p>
            <div className="md:mt-8" data-aos="fade-right">
              {/* Responsivenss button for Medium screens */}
              <Link to={`/shop?category=${encodeURIComponent('Soap Products')}`}>
                <FilterrButton title="Shop Soap Products" className={'hidden md:flex'} />
              </Link>
            </div>
          </div>

          {/* Soap product image */}
          <div className="md:w-1/2">
            <img src={BgImage8} alt="" className="w-full bg-white shadow-md " data-aos="fade-right" />
          </div>
          <div className="md:mt-8" data-aos="fade-right">
            {/* Responsiveness button for small screens */}
            <Link to={`/shop?category=${encodeURIComponent('Soap Products')}`}>
              <FilterrButton title="Shop Soap Products" className={'md:hidden ml-22 mt-8 '} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col  md:flex-row justify-between md:w-[80%] mx-auto gap-4 md:gap-10 items-start pt-20">
          {/* Skin Products section */}
          <h2 className="md:hidden  text-3xl md:text-4xl font-bold text-center ml-8 " data-aos="fade-left">Skin Products</h2>
          <div className="md:w-1/2" >
            {/* skin product image */}

            <img src={BgImage7} alt="" className="w-full bg-white shadow-md " data-aos="fade-right" />
          </div>
          <div className="md:w-1/2 flex flex-col md:items-center md:justify-center px-4 md:px-8 py-12">
            <h2 className="hidden md:flex text-3xl md:text-4xl font-bold text-center mb-6">Skin Products</h2>
            <p className="text-center text-sm md:text-base leading-relaxed " data-aos="zoom-in">
              Shea butter is a natural fat extracted from the nuts of the shea tree, found primarily in West Africa.
              Rich in vitamins A, E, and F, it’s widely known for its deeply moisturizing and healing properties.
              <br /><br />
              For skin, shea butter soothes dryness, reduces inflammation, fades scars, and improves elasticity—making it suitable for all skin types.
              When applied to hair, it nourishes the scalp, strengthens strands, reduces breakage, and promotes healthy growth and shine.
              Its natural richness makes it a trusted remedy for both beauty and wellness.
            </p>

            <div className="md:mt-8"data-aos="fade-right">
              <Link to={`/shop?category=${encodeURIComponent('Skin Products')}`}>
                {/* Responsiveness button for medium screens */}
                <FilterrButton title="Shop Skin Products" className={'hidden md:flex'} />
              </Link>
            </div>
            <div className="md:mt-8" data-aos="fade-right" >
              {/* Responsiveness button for small screens */}
              <Link to={`/shop?category=${encodeURIComponent('Skin Products')}`}>
                <FilterrButton title="Shop Skin Products" className={'md:hidden ml-22 mt-8'} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:w-[80%] md:mx-auto md:gap-10  items-start  md:pt-20">
          {/* Hair products section */}
          <div className="md:w-1/2 flex flex-col items-center justify-center px-4 md:px-8 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-aos="fade-left">Hair Products</h2>

            <p className="text-center text-sm md:text-base leading-relaxed " data-aos="zoom-in">
              Shea butter is a natural fat extracted from the nuts of the shea tree, found primarily in West Africa.
              Rich in vitamins A, E, and F, it’s widely known for its deeply moisturizing and healing properties.
              <br /><br />
              For skin, shea butter soothes dryness, reduces inflammation, fades scars, and improves elasticity—making it suitable for all skin types.
              When applied to hair, it nourishes the scalp, strengthens strands, reduces breakage, and promotes healthy growth and shine.
              Its natural richness makes it a trusted remedy for both beauty and wellness.
            </p>

            <div className="md:mt-8" data-aos="fade-right">
              {/* Responsiveness button for medium screens */}
              <Link to={`/shop?category=${encodeURIComponent('Hair Products')}`}>
                <FilterrButton title="Shop Hair Products" className={'hidden md:flex'} />
              </Link>
            </div>
          </div>

          {/* hair products image */}
          <div className="md:w-1/2">
            <img src={BgImage6} alt="" className="w-full bg-white shadow-md" data-aos="fade-right" />
          </div>

          <div className="md:mt-8" data-aos="fade-right">
            <Link to={`/shop?category=${encodeURIComponent('Hair Products')}`}>
              <FilterrButton title="Shop Hair Products" className={'md:hidden ml-22 mt-6'} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div >
  )
};