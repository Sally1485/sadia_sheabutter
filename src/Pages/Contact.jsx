import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact1Image from '../assets/images/location.jpg';
import SubmitButton from "../components/SubmitButton";
import '@fontsource/poppins';
import Aos from "aos";
import "aos/dist/aos.css";


export default function Contact() {
    return (
        <div className="relative">
            <Navbar />
            <section>
                <div className="flex flex-col md:flex-row w-[80%] mx-auto mt-30 justify-between gap-20">
                    <div className="md:w-2/5">
                        {/* contact image */}
                        <img src={Contact1Image} alt="" className="w-full h-auto object-cover" data-aos="fade-left" />
                    </div>
                    <div className="md:w-3/5 flex flex-col  justify-center " data-aos="fade-right">
                        <h1 className="text-4xl md:text-6xl text-brown font-bold">Contact Us</h1>
                        <div className="flex flex-col md:flex-row items-start pt-8 justify-between gap-10 md:gap-20">
                            <span className="flex flex-col justify-between gap-4">
                                <h2 className="text-lg md:text-3xl font-bold">Our Hours</h2>
                                <h3>Mon-Fri: 8am-8pm</h3>
                                <h3>Saturday: 9am-8pm</h3>
                                <h3>Sunday: 9am-7pm</h3>
                                <h3>All times are Central Standard Time Zones</h3>
                            </span>
                            <span>
                                <h2 className="text-lg md:text-3xl font-bold">Our Location</h2>
                                <p className="md:max-w-md pt-4 md:leading-relaxed ">Based in the heart of Kansas City, Pure Shea Store is proud to call this vibrant and diverse community home. You can find us at:
                                    201 N Forest Ave.
                                    Suite 225 Independence, MO 64050</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-6 md:mt-12  ">
                <h1 className="text-2xl md:text-4xl text-brown font-bold text-center p-4" data-aos="zoom-out-left">Get In Touch</h1>
                {/* form section */}
                <div className=" w-[80%] mx-auto md:pt-4  md:h-[648px] mb-12  flex flex-col md:flex-row justify-around  ">
                    <form action="https://formspree.io/f/mvgqkjqo" method="POST" data-aos="zoom-in" className="md:w-[45%] flex flex-col md:items-center md:justify-center gap-8  pt-8">
                        <input type="text" name="name" id="name" placeholder=" Enter Full Name" className="w-full md:w-96 px-4 py-2 border border-Green" />
                        <input type="email" name="email" id="email" placeholder="Enter Email" className="w-full md:w-96 px-4 py-2 border border-Green" />
                        <input type="tel" name="number" id="number" placeholder="Enter Phone Number" className="w-full md:w-96 px-4 py-2 border border-Green" />
                        <textarea name="message" id="message" placeholder="Enter your message" className=" w-full md:w-96 h-40 px-4 py-2 border border-Green"></textarea>
                        <SubmitButton title={"Submit"} />
                    </form>
                    {/* image section */}
                    <div className="sm:mt-6 md:w-[45%] h-screen bg-[url('./assets/images/contact5.jpg')] bg-[length:100%_100%] bg-no-repeat  " data-aos="zoom-out">
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}