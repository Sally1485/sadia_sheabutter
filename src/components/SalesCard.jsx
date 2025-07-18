import SalesImage from '../assets/images/shea.jpg';
import SubmitButton from './SubmitButton';
import { Link } from 'react-router';


export default function SalesCard ({name, price,category}) {
    return(
        <div className='flex flex-col items-center shadow-md  w-[250px] h-auto rounded-2xl overflow-hidden p-4 '>
         <div>
               <img src={SalesImage} alt="" className='w-full   rounded-full' />
         </div>
           <div className='flex gap-4 flex-col items-center  justify-between p-4'>
             <h2 className='text-xl font-bold text-Green'>{name}</h2>
              <p className="text-sm text-gray-500">{category}</p>
            <p className='font-light text-brown'>{price}</p>
           </div>
            <div className='flex justify-center  pb-6'>
            <Link to={'/view-product'}><SubmitButton title={"View Product"}  /></Link>
            </div>
        </div>
    ) 
}