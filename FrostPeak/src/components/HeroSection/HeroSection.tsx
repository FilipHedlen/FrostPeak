import { Link } from "react-router-dom";
import WeatherComponent from "../Weather/WeatherComponent";
import "../../input.css";

const HeroSection = () => {
    return (
        <section className="hero relative scroll-auto">
            <div className="hero-content text-center text-white absolute inset-0 flex flex-col justify-between">
                <div className="mt-10 mb-32">
                    <h1 className="text-4xl font-bold mb-4 font-playfair">Welcome to Ramundberget!</h1>
                    <p className="text-lg mb-8 font-poppins">Discover the beauty of our slopes and locations.</p>
                    <Link to="/locations" className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-nunito font-bold rounded-full group">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Explore</span>
                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                    </Link>
                </div>
                <div className="">
                    <WeatherComponent />
                </div>
            </div>
        </section>
    );
};
  
export default HeroSection;