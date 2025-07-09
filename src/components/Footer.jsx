import { FacebookIcon, InstagramIcon, Twitter } from "lucide-react"




export default function Footer() {
    return (
        <div className="bg-amber-700 text-white p-10 mt-4">
            <div className="flex flex-col md:flex-row justify-around gap-8">
                  <div className=" flex flex-col gap-4 ">
                    <h1>Logo</h1>
                    <div className="flex flex-row gap-4">
                        <FacebookIcon />
                        <InstagramIcon />
                        <Twitter />
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold">Retail Store</h1>
                        <p>Address</p>
                    </div>
                    <div>
                        <h1 className="font-bold">Factory&Office</h1>
                        <p>Address</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-4">
                    <h1 className="font-bold">About Us</h1>
                    <h2>Our Story</h2>
                    <h2>Our Team</h2>
                    <h2>Our Values</h2>
                    <h2>Our Ingredients</h2>
                    <h2>Contacts us</h2>
                </div>
                <div className="flex flex-col justify-between">
                    <h1 className="font-bold">Help Center</h1>
                    <h2>become a brand ambassador</h2>
                    <h2>Faqs</h2>
                </div>
              
            </div>
            <div className="border-b pt-4"></div>
            <div className="text-center p-4 text-sm">
                <p>Copyright &copy; 2025 Sadia SheaButter. All rights reserved</p>
            </div>
        </div>
    )
}