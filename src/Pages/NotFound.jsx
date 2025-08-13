import ErrorImage from '../assets/images/error.png';
import { Link } from 'react-router'; 
import { MoveDown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      {/* Error Image */}
      <img
        src={ErrorImage}
        alt="404 Error - Page Not Found"
        className="w-96 h-auto mb-6"
      />

      {/* Text & Navigation */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-4">Looks like you took a wrong turn.</p>

      {/* Bounce Arrow */}
      <MoveDown className="animate-bounce mb-4 text-Green" size={32} />

      {/* Homepage Link */}
      <Link to="/">
        <button className="px-8 py-2 bg-Green rounded-2xl text-white hover:bg-green-700 transition-colors">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}
