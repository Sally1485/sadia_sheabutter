import GoogleIcon from '../assets/images/google-icon.png';
import FacebookIcon from '../assets/images/facebook.png';
import { Link } from 'react-router';
import { ChevronsLeft } from 'lucide-react';






export default function SignUp() {
    return (
        <div>
              <div className="flex items-center gap-2 mt-10 ml-10 cursor-pointer text-gray-700 hover:text-green-700 transition-colors">
  <ChevronsLeft className="w-5 h-5" />
  <Link to={'/'} className="text-base font-medium">Go Back</Link>
</div>
            <div className='flex flex-col md:items-center md:justify-center '>
                <h1 className='text-4xl font-medium md:text-center mt-20'>Sign Up</h1>
                <p className='font-light text-lg md:text-center pt-6'>Already a member? <Link to={'/login'} className='text-gray-500'>Log In</Link> </p>
                <div>
                    <form>
                    <button className='flex items-center cursor-pointer gap-10 md:gap-18 px-4 py-2 w-72 md:w-100 border border-gray-400 rounded mt-6'>
                        <img src={GoogleIcon} className='w-6' alt="" />
                        <h2>Sign up with Google</h2>
                        </button>
                    <button className='flex items-center gap-8 md:gap-16 border border-gray-500 px-4 py-2 bg-blue-900 w-72 md:w-100 rounded mt-4 cursor-pointer'>
                       <img src={FacebookIcon} className='w-8 text-white' alt="" />
                        <h2 className='text-white'>Sign up with Facebook</h2>
                        </button>
                        <div className='flex md:items-center gap-2 my-4'>
                            <div className='border-t-1 flex-1/2 md:flex-1 border-gray-400'></div>
                            <span>Or</span>
                            <div className='border-t-1 flex-1/2 md:flex-1 border-gray-400'></div>
                        </div>
                        <button className='md:w-100 w-72 px-4 py-2 border border-gray-500 rounded mt-4 cursor-pointer'>Sign up with Email</button>
                         </form>

                </div>
            </div>
            
        </div>
    )
}