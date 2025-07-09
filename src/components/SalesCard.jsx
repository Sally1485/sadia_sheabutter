import SalesImage from '../assets/images/shea.jpg';

export default function SalesCard () {
    return(
        <div className='flex flex-col items-center shadow-md  w-[250px] h-auto rounded-2xl overflow-hidden p-4 '>
         <div>
               <img src={SalesImage} alt="" className='w-full   rounded-full' />
         </div>
           <div className='flex gap-4 flex-col items-center  justify-between p-4'>
             <h2 className='text-xl font-bold'>Whipped Cream</h2>
            <p className='font-light'>$25.00</p>
           </div>
            <div className='flex justify-center  pb-6'>
                <button className='border hover:bg-amber-800 border-stone-400 px-12 py-2 hover:text-white'>Out of Stock</button>
            </div>
        </div>
    ) 
}