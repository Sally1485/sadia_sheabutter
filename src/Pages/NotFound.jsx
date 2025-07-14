import ErrorImage from '../assets/images/error.png';
import { Link } from 'react-router';
import { MoveDown } from 'lucide-react';

export default function Notfound() {
    return (
        <div>
            <div className=' flex justify-center items-center  bg-white'>
                <img src={ErrorImage} alt="" className='w-[80%] h-screen object-cover' />
            </div>
            <div className='flex flex-col justify-between items-center gap-5'>
                <h1 className='text-3xl font-bold'>Back to </h1>
                <MoveDown  className='animate-bounce'/>
                <Link to={'/'}><button className='px-12 py-2 bg-Green rounded-2xl text-white'>Homepage</button></Link>
            </div>
        </div>
    )
}