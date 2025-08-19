// import SalesImage from '../assets/images/shea.jpg';
import SubmitButton from './SubmitButton';
import { Link } from 'react-router';
import '@fontsource/poppins';



export default function SalesCard({ id, salesImage, name, price, category }) {
  return (
    <div className='flex flex-col  md:w-[250px]   md:h-auto overflow-hidden p-4 '>
      <div>
        <img src={salesImage} alt="product image" className='w-full  rounded' width='471' height='500' />
      </div>
      <div className='flex gap-4 flex-col ml-4  justify-between md:p-4'>
        <h2 className='text-lg  '>{name}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className='font-light '>Gh₵ {price}.00</p>
      </div>
      <div className='flex md:justify-center  pb-4'>
        <Link to={`/view-product/${id}`}><SubmitButton title={"View Product"} /></Link>
      </div>
    </div>
  )
}