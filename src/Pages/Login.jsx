import GoogleIcon from '../assets/images/google-icon.png';
import FacebookIcon from '../assets/images/facebook.png';
import { Link } from 'react-router';
import { ChevronsLeft } from 'lucide-react';






export default function Login() {
    return (
        <div>
         <div className="flex items-center gap-2 mt-10 ml-10 cursor-pointer text-gray-700 hover:text-green-700 transition-colors">
  <ChevronsLeft className="w-5 h-5" />
  <Link to={'/'} className="text-base font-medium">Go Back</Link>
</div>
            <div className='flex flex-col items-center justify-center '>
                  <div>
                <h1 className='text-4xl font-medium text-center mt-10'>Log In</h1>
                <p className='font-light text-lg text-center pt-6'>New to this site? <Link to={'/sign-up'} className='text-gray-500'>Sign Up</Link> </p>
                <div>
                    <form>
                    <button className='flex items-center gap-18 px-4 py-2 w-100 border border-gray-400 rounded mt-6'>
                        <img src={GoogleIcon} className='w-6' alt="" />
                        <h2>Log in with Google</h2>
                        </button>
                    <button className='flex items-center gap-16 border border-gray-500 px-4 py-2 bg-blue-900  w-100 rounded mt-4 '>
                       <img src={FacebookIcon} className='w-8 text-white' alt="" />
                        <h2 className='text-white'>Log in with Facebook</h2>
                        </button>
                         <div className='flex items-center gap-2 my-4'>
                            <div className='border-t-1 flex-1 border-gray-400'></div>
                            <span>Or</span>
                            <div className='border-t-1 flex-1 border-gray-400'></div>
                        </div>
                         <button className='w-100 px-4 py-2 border border-gray-500 rounded mt-4'>Log in with Email</button>
                                           </form>

                </div>
            </div>
          </div>
            
        </div>
    )
}