import AboutImage from '../assets/images/img7.jpg';
import About2image from '../assets/images/img4.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import { Goal, Lightbulb } from 'lucide-react';
import { Link } from 'react-router';
import SubmitButton from '../components/SubmitButton';
import AboutBg1 from '../assets/images/img11.jpg';
import AboutBg2 from '../assets/images/img12.jpg'
import { useEffect, useState } from 'react';



export default function About() {
    const images = [
        AboutBg1,
        AboutBg2
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    },[]);
    
    

    return (
        <div>
            <Navbar />
            <div className="relative w-full  bg-center bg-cover h-[70vh] md:h-[100vh] transition-all duration-1000 ease-in-out bg-fixed "
            style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                }}>
                <div className='bg-black inset-0 opacity-60 absolute'></div>
                <div className="pt-54 md:pt-72 w-full  flex flex-col  items-center justify-center ">
                    <h1 className=" text-3xl md:text-8xl text-white font-bold text-center relative z-10 ">About Us</h1>
                </div>
            </div>
         
            <section className='mt-12 not-even:'>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center">Our Story</h2>
                <div className="flex flex-col md:flex-row w-[90%] mx-auto gap-10 mt-14">
  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center items-center">
    <img
      src={AboutImage}
      alt="About Khalimatu Sadia Enterprise"
      className="w-full h-auto rounded-xl shadow-md object-cover hover:scale-105 transition"
    />
  </div>
                
  {/* Text Section */}
  <div className="md:w-1/2 flex items-start">
    <div className="text-center md:text-left leading-relaxed space-y-4">
      
      <p>
        Khalimatu Sadia Enterprise was founded on resilience, tradition, and a deep passion for transformation.
        Established on January 15, 2023, in Ghana’s Sagnarigu Municipality—within the Savannah ecological zone—
        the company is dedicated to crafting premium shea butter and its by-products.
      </p>
      <p>
        Rooted in the rich natural supply of shea nuts, we add value through agriculture and manufacturing.
        Our products include nourishing hair creams, soothing pomades, rich shea butter, and artisanal soaps,
        all made using traditional and safe methods such as crushing, roasting, grinding, and kneading.
      </p>
      <p>
        But our mission goes far beyond skincare. We aim to empower communities, reduce unemployment,
        and contribute to national development. With plans to cultivate a 60-hectare organic shea nut farm
        and scale both locally and globally, Khalimatu Sadia Enterprise champions quality, sustainability,
        and meaningful impact.
      </p>
    </div>
  </div>
</div>

                <div className=' flex md:flex-row  mt-20 '>
                  <div className="flex flex-col md:flex-row justify-between items-center md:gap-16 w-[90%] pt-12 mx-auto">
  {/* Text Section */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl md:text-4xl font-extrabold text-amber-900 mb-4">
      The Woman Behind the Vision
    </h2>
    <p className="leading-relaxed">
      Mrs. Sadia Alidu, the visionary founder of Khalimatu Sadia Enterprise, is a trained teacher and a graduate of
      Integrated Business Studies from the University for Development Studies. She is also a proud member of the
      Federation of People with Disabilities in Ghana.
    </p>
    <p className="mt-4 leading-relaxed ">
      Despite living with a visible physical disability, Mrs. Sadia’s resilience and determination have shaped a
      powerful story of empowerment—one rooted in the legacy of her grandmother, a fellow woman with a disability
      who thrived in agro-processing.
    </p>
    <p className="mt-4 leading-relaxed ">
      As a child, Sadia learned the traditional craft of turning shea nuts into butter, cotton into thread,
      and palm nuts into oil alongside her grandmother. This early foundation, combined with formal training from
      organizations like USAID, Ashiba Company Limited, and Leventis Cooperative Society, strengthened her drive
      to create change.
    </p>
    <p className="mt-4 leading-relaxed ">
      Today, she leads a growing enterprise that not only delivers high-quality natural products but also
      uplifts marginalized voices, celebrates tradition, and transforms lives—one jar of shea butter at a time.
    </p>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
    <img
      src={About2image}
      alt="Founder Sadia Alidu"
      className="w-full max-w-md rounded-xl shadow-lg object-cover hover:scale-105 transition"
    />
  </div>
</div>

                </div>
                <div className=' pt-8  md:h-[70vh]'>


                    <h2 className='text-2xl font-bold text-white text-center'>Our Mission & Vision </h2>
                    <p className='text-lg  text-white text-center'>Guiding principles that shape our commitment to quality, sustainability and community empowerment</p>
                    <div className=' flex flex-col  md:flex-row items-center gap-6 w-[80%] mx-auto pt-8'>
                        <div className='md:w-1/2 bg-Green text-white shadow-lg p-3 hover:scale-105 transition'>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div><Lightbulb className='size-10 text-white' /></div>
                                <h2 className='text-2xl font-bold text-center p-2 '>Our Vision</h2>
                            </div>
                            <p className=' text-center leading-relaxed p-2'>Our vision is to become a leading force in value addition within the agricultural and manufacturing sectors. We aim to drive innovation through sustainable and efficient practices. Our commitment to quality ensures products that meet both local and international standards. Through our work, we strive to make a meaningful impact across the entire value chain.</p>
                        </div>
                        <div className='md:w-1/2 shadow-lg bg-Green text-white p-2.5 hover:scale-105 transition'>
                            <div className='flex flex-row justify-center items-center gap-2 '>
                                <div><Goal className='size-10 text-white' /></div>
                                <h2 className='text-2xl font-bold  text-center p-2 '>Our Mission</h2>
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