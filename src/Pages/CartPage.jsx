import ProductImage from '../assets/images/img-1.jpg';
import { Link } from 'react-router';


export default function CartPage() {
   




    return (
        <div className="w-[80%] mx-auto">
            <div className="flex flex-row justify-between">
                <div className='w-1/2'>
                    <img src={ProductImage } alt="" className='w-full h-96 object-cover' />
                </div>
                
                <div>
                    <h2>Shea Soaps Single Bar</h2>
                    <h3>Ghc 12.00</h3>
                     <div className="flex flex-col">
              <h2 className="font-medium mb-1">Quantity</h2>
              <input type="number" defaultValue='1' min='1' className="w-20 rounded px-2 py-1 border border-brown text-center " />
            </div>
                    <div>
                <Link><button className="w-full px-6 py-2 border border-Green hover:bg-brown text-Green hover:text-white">Add to Cart</button></Link>
              </div>
                </div>
            </div>
     </div>   
    )
}