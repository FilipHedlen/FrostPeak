import { Link } from "react-router-dom";
import AnimatedBackground from "../../components/Background/AnimatedBackground";

const NotFoundPage = () => {
    return (
        <>
        <AnimatedBackground />
        
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-96">
          <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
          <p className="text-xl text-white mb-8">The page you are looking for could not be found.</p>
          <p className="text-xl text-white mb-12">Try going back to our homepage with the link below!</p>
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-gray-600 border-b-2 border-white hover:border-gray-600 transition-all duration-300 py-1"
          >
            Homepage
          </Link>
        </div>
        <p className="text-white">&copy; 2024 FrostPeak Explorer. All rights reserved.</p>
      </div>
    </>
    );
  };
  
  export default NotFoundPage;