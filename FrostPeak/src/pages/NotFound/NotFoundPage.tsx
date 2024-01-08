import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center mb-96">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
          <p className="text-xl text-gray-600 mb-8">The page you are looking for could not be found.</p>
          <p className="text-xl text-gray-600 mb-12">Try going back to our homepage with the link below!</p>
          <Link
            to="/"
            className="text-xl font-bold text-gray-600 border-b-2 border-gray-600 hover:border-gray-800 transition-all duration-300 py-1"
          >
            Homepage
          </Link>
        </div>
        <p className="text-gray-600">&copy; 2024 FrostPeak Explorer. All rights reserved.</p>
      </div>
    </div>
    );
  };
  
  export default NotFoundPage;