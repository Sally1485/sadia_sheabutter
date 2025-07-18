import AboutImage from '../assets/images/pro.jpg';
import About2image from '../assets/images/pro1.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import { Goal, Lightbulb } from 'lucide-react';
import { Link } from 'react-router';
import SubmitButton from '../components/SubmitButton';




export default function About() {
    return (
        <div>
            <Navbar />
            <div className="bg-[url('./assets/images/about1.jpg'))] bg-center bg-cover h-[50vh] md:h-[100vh]">
                <div className="h-full w-full bg-black/40 flex flex-col  items-center justify-center ">
                    <h1 className=" text-3xl md:text-6xl text-white font-bold text-center ">About Us</h1>
                </div>
            </div>
            <section>
                <div className='bg-Green'>
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-white ">Our Story</h2>
                    <div className='flex flex-col md:flex-row w-[80%] mx-auto justify-between pt-8 '>
                        <div className='md:w-1/2'>
                            <img src={AboutImage} alt="" className='size-100' />
                        </div>
                        <div className='md:w-1/2 flex justify-center text-center leading-relaxed items-center text-white'>
                            <p>Khalimatu Sadia Enterprise was born out of resilience, tradition, and a deep passion for transformation. Established on January 15th, 2023, in the heart of the Sagnarigu Municipality in Ghana’s Savannah ecological zone, the company is devoted to creating premium shea butter and its by-products. Drawing from the region’s natural abundance of shea nuts, we focus on value addition in the agricultural and manufacturing sectors — producing rich shea butter, nourishing hair creams, soothing pomades, and artisanal soaps.

                                Our mission goes beyond skincare; we aim to empower communities, reduce unemployment, and contribute to national development. With plans to establish a 60-hectare organic shea nut farm and an expanding market both locally and internationally, Khalimatu Sadia Enterprise is committed to quality, sustainability, and impact. Each product is crafted through traditional yet safe methods — crushing, roasting, grinding, and kneading — to preserve the purity and effectiveness of shea.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-milk flex md:flex-row '>
                    <div className='flex flex-col md:flex-row justify-between md:gap-20 w-[80%] pt-10 mx-auto '>
                        <div className='md:w-1/2'>
                            <h2 className='text-xl md:text-3xl text-center font-black'>The Woman Behind the Vision</h2>
                            <p className='flex pt-4 items-center text-center leading-relaxed'>Mrs. Sadia Alidu, the visionary founder of Khalimatu Sadia Enterprise, is a professionally trained teacher, a graduate of Integrated Business Studies from the University for Development Studies, and a proud member of the Federation of People with Disabilities in Ghana. Despite facing the challenges of a visible physical disability, Mrs. Sadia’s determination has carved a path of empowerment, inspired deeply by her grandmother — a fellow woman with a disability who successfully worked in agro-processing.

                                From an early age, Sadia learned the craft of turning shea nuts into butter, cotton into thread, and palm nuts into rich oils by working alongside her grandmother. This childhood experience, combined with empowerment through training from organizations like USAID, Ashiba Company Limited, and Leventis Cooperative Society, shaped her desire to lead change. Today, she channels her story into a thriving business that celebrates local tradition, uplifts the marginalized, and delivers natural beauty to the world — one jar of shea butter at a time.</p>
                        </div>
                        <div className='md:w-1/2'>
                            <img src={About2image} alt="" className='size-120' />
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-br from-brown to-Green pt-8 h-[50vh] md:h-[70vh]'>


                    <h2 className='text-2xl font-bold text-white text-center'>Our Mission & Vision </h2>
                    <p className='text-lg  text-white text-center'>Guiding principles that shape our commitment to quality, sustainability and community empowerment</p>
                    <div className=' flex flex-col  md:flex-row items-center gap-6 w-[80%] mx-auto pt-8'>
                        <div className='md:w-1/2 bg-white shadow-lg p-2'>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div><Lightbulb className='size-10 text-Green' /></div>
                                <h2 className='text-2xl font-black text-center p-2 '>Our Vision</h2>
                            </div>
                            <p className=' text-center leading-relaxed p-2'>Our vision is to become a leading force in value addition within the agricultural and manufacturing sectors. We aim to drive innovation through sustainable and efficient practices. Our commitment to quality ensures products that meet both local and international standards. Through our work, we strive to make a meaningful impact across the entire value chain.</p>
                        </div>
                        <div className='md:w-1/2 shadow-lg bg-white p-2'>
                            <div className='flex flex-row justify-center items-center gap-2 '>
                                <div><Goal className='size-10 text-Green' /></div>
                                <h2 className='text-2xl font-black text-center p-2 '>Our Mission</h2>
                            </div>
                            <p className=' text-center leading-relaxed p-2'>Our mission is to contribute meaningfully to national economic development. We aim to create sustainable employment opportunities within agriculture, agro-processing, and manufacturing. A key focus of our efforts is to empower women and persons with disabilities (PWDs). We believe in inclusive practices that foster equal opportunity and long-term impact.</p>
                        </div>

                    </div>

                </div>
            </section>
            <section className=' p-8'>
                <h2 className='text-lg font-bold text-center p-2'>Experience Pure Shea Today</h2>
                <p className='text-center p-2'>Join thousands of statisfied customers who have discoveres the benefits of our premium shea butter products.</p>
                <div className=' flex justify-center items-center p-2'>
                   <Link to={'/shop'}><SubmitButton title={"Shop Products"} /></Link> 
                </div>
            </section>
            <Footer />
        </div>
    )
}