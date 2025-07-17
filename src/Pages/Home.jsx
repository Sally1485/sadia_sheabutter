import Navbar from "../components/NavBar";
import Footer from '../components/Footer';
import SalesCard from "../components/SalesCard";
import { useState, useEffect } from "react";
import BgImage1 from '../assets/images/bg-1.jpg';
import BgImage2 from '../assets/images/bg-2.jpg';
import BgImage3 from '../assets/images/bg-3.jpg';
import BgImage4 from '../assets/images/bg-4.jpg';
import BgImage6 from '../assets/images/img-2.jpg';
import { Link } from "react-router";

export default function Home() {
    const images = [
        BgImage1,
        BgImage2,
        BgImage3,
        BgImage4
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000); // 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div >
            <Navbar />
            <div className="h-[50vh] md:h-[100vh] bg-cover bg-center transition-all duration-1000 ease-in-out bg-fixed  "
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                }}
            >
                <div className="h-full w-full bg-black/40 flex flex-col  items-center justify-center  ">
                    <h1 className="text-white text-4xl text-center font-bold pt-8 ">Beauty Rooted in Nature</h1>
                    <p className="italic text-white mt-4 text-lg">Raw. Pure. Powerful. Shea butter for everyday glow</p>
                    <Link to={'/shop'}> <button className="border border-Green hover:bg-brown text-Green px-12 py-2 mt-4 hover:text-white ">Shop Now</button></Link>
                </div>
            </div>
            <section className="pt-12">
                <div>
                    <h2 className="text-center text-2xl font-bold">About Us</h2>
                    <p className="font-light text-center items-center w-[60%] mx-auto pt-8 text-sm/loose">At Khalimatu Sadia Enterprise, our journey with shea butter is deeply personal and rooted in tradition. Founded by Mrs. Sadia Alidu—a physically challenged educator and entrepreneur—inspired by generations of women in agro-processing, the business is dedicated to producing pure, handcrafted shea butter and its by-products. Located in the heart of the Northern Region of Ghana, we transform locally sourced shea nuts into nourishing products like soaps, creams, and pomades. Our mission goes beyond skincare—it's about empowering women and persons with disabilities while honoring the legacy of sustainable shea production</p>
                    <div className="items-center justify-center flex pt-6">
                        <Link to={'/about'}> <button className="px-12 py-2 hover:text-white border border-Green text-Green hover:bg-brown ">Read More</button></Link>
                    </div>
                </div>
            </section>
            <section className="pt-12">

                <h2 className="text-2xl font-bold text-center">Shop Our Favorites</h2>
                <div className="flex flex-col md:flex-row justify-between md:w-[80%] md:mx-auto gap-10  items-start pt-20">
                    <div className="md:w-1/2 flex flex-col justify-center items-center pt-15">
                        <h2 className="text-2xl font-bold">Shea Butter</h2>
                        <p className=" leading-relaxed md:tracking-widest text-center  text-sm/7 pt-10  ">Shea butter is a natural fat extracted from the nuts of the shea tree, found mainly in West Africa. Rich in vitamins A, E, and F, it is known for its deeply moisturizing and healing properties. For the skin, shea butter helps to soothe dryness, reduce inflammation, fade scars, and improve elasticity, making it ideal for all skin types. When applied to hair, it strengthens strands, reduces breakage, and nourishes the scalp, promoting healthy growth and shine. Its natural richness makes it a trusted remedy for both beauty and wellness.</p>
                        <div className="pt-8">
                            <Link to={'/shop'}><button className="border text-Green border-Green hover:bg-brown hover:text-white px-12 py-2 cursor-pointer">Raw Shea</button></Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={BgImage6} alt="" className="w-full bg-white shadow-md" />
                    </div>

                </div>

                <div className="flex flex-col  md:flex-row justify-between w-[80%] mx-auto gap-10 items-start pt-20">
                    <div className="md:w-1/2">
                        <img src={BgImage6} alt="" className="w-full bg-white shadow-md " />
                    </div>
                    <div className="md:w-1/2 pt-16">
                        <h2 className="text-2xl font-bold text-center leading-relaxed">Hair Products</h2>
                        <p className="text-center leading-relaxed tracking-widest  text-sm/7 pt-10 ">Shea butter is a natural fat extracted from the nuts of the shea tree, found mainly in West Africa. Rich in vitamins A, E, and F, it is known for its deeply moisturizing and healing properties. For the skin, shea butter helps to soothe dryness, reduce inflammation, fade scars, and improve elasticity, making it ideal for all skin types. When applied to hair, it strengthens strands, reduces breakage, and nourishes the scalp, promoting healthy growth and shine. Its natural richness makes it a trusted remedy for both beauty and wellness</p>
                        <div className="pt-8 flex items-center justify-center">
                            <Link to={'/shop'}><button className="  border border-Green text-Green hover:bg-brown hover:text-white px-12 py-2 cursor-pointer" >Hair Products</button></Link>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between md:w-[80%] md:mx-auto gap-10  items-start pt-20">
                    <div className="md:w-1/2 flex flex-col justify-center items-center pt-15">
                        <h2 className="text-2xl font-bold">Body Products</h2>
                        <p className=" leading-relaxed md:tracking-widest text-center  text-sm/7 pt-10  ">Shea butter is a natural fat extracted from the nuts of the shea tree, found mainly in West Africa. Rich in vitamins A, E, and F, it is known for its deeply moisturizing and healing properties. For the skin, shea butter helps to soothe dryness, reduce inflammation, fade scars, and improve elasticity, making it ideal for all skin types. When applied to hair, it strengthens strands, reduces breakage, and nourishes the scalp, promoting healthy growth and shine. Its natural richness makes it a trusted remedy for both beauty and wellness.</p>
                        <div className="pt-8">
                            <Link to={'/shop' }><button className="border border-Green text-Green hover:bg-brown hover:text-white px-12 py-2 cursor-pointer">Body Essentials</button></Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={BgImage6} alt="" className="w-full bg-white shadow-md" />
                    </div>

                </div>

            </section>


            <Footer />
        </div >
    )
}