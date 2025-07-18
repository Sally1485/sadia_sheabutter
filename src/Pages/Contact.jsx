import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact1Image from '../assets/images/nuts.jpg';
import SubmitButton from "../components/SubmitButton";



export default function Contact() {
    return (
        <div className="relative">
            <Navbar />
            <section>
                <div className="flex flex-row w-[80%] mx-auto mt-30 justify-between gap-20">
                    <div className="w-2/5">
                        <img src={Contact1Image} alt="" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-3/5 flex flex-col  justify-center ">
                        <h1 className="text-6xl font-bold">Contact Us</h1>
                        <div className="flex items-start pt-8 justify-between gap-20">
                            <span className="flex flex-col justify-between gap-4">
                                <h2 className="text-4xl font-bold">Our Hours</h2>
                                <h3>Mon-Fri: 8am-8pm</h3>
                                <h3>Saturday: 9am-8pm</h3>
                                <h3>Sunday: 9am-7pm</h3>
                                <h3>All times are Central Standard Time Zones</h3>
                            </span>
                            <span>
                                <h2 className="text-4xl font-bold">Our Location</h2>
                                <p className="max-w-md pt-4 leading-relaxed ">Based in the heart of Kansas City, Pure Shea Store is proud to call this vibrant and diverse community home. You can find us at:
                                    201 N Forest Ave.

                                    Suite 225

                                    Independence, MO 64050</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-8  ">
                <h1 className="text-4xl font-bold text-center p-4">Get In Touch</h1>
                <div className=" w-[80%] mx-auto pt-4  h-[648px]   flex flex-row justify-around  ">
                    <form action="" className="w-[45%] flex flex-col items-center gap-8  pt-8">
                        <input type="text" name="name" id="name" placeholder=" Enter Full Name" className="w-96 px-4 py-2 border border-Green" />
                        <input type="email" name="email" id="email" placeholder="Enter Email" className="w-96 px-4 py-2 border border-Green" />
                        <input type="tel" name="number" id="number" placeholder="Enter Phone Number" className="w-96 px-4 py-2 border border-Green" />
                        <textarea name="message" id="message" placeholder="Enter your message" className=" w-full md:w-96 h-40 px-4 py-2 border border-Green">Enter your message</textarea>
                         <SubmitButton  title={"Submit"}/>
                    </form>
                    <div className="w-[45%] bg-[url('./assets/images/nuts.jpg')] bg-center bg-fixed bg-cover bg-no-repeat">

                        {/* <img src={Contact1Image} alt="" className="w-full h-auto object-cover" /> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}