import { FacebookIcon, InstagramIcon, Twitter } from "lucide-react";
import LogoImage from '../assets/images/logo.png'




export default function Footer() {
    return (
        <div className="bg-milk  p-10 mt-4">
            <div className="flex flex-col md:flex-row justify-around gap-8">
                <div className=" flex flex-col gap-4 ">
                    <div className="w-24">
                        <img src={LogoImage} alt="" className="w-full h-auto object-cover" />
                    </div>
                    <div className="max-w-sm">
                        <p>Naturally crafted in Northern Ghana, our shea butter products nourish and protect skin and hair with rich, organic goodness.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <span><FacebookIcon/></span>
                        <span><InstagramIcon/></span>
                        <span><Twitter /></span>
                    </div>
                </div>
                <div className="flex flex-col  gap-4">

                    <h1 className="font-bold text-lg">Product</h1>
                    <h2>Features</h2>
                    <h2>Pricing</h2>
                    <h2>API</h2>

                </div>
                <div className="flex flex-col justify-between gap-4">
                    <h1 className="font-bold text-lg">About Us</h1>
                    <h2>Our Story</h2>
                    <h2>Our Team</h2>
                    <h2>Our Values</h2>
                    <h2>Our Ingredients</h2>
                    <h2>Contacts us</h2>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-lg">Support</h1>
                    <h2>Help Center</h2>
                    <h2>Contact</h2>
                    <h2>Privacy</h2>

                </div>


            </div>
            <div className="border-b pt-4"></div>
            <div className="text-center p-4 text-sm">
                <p>Copyright &copy; 2025 Sadia SheaButter. All rights reserved</p>
            </div>
        </div>
    )
}