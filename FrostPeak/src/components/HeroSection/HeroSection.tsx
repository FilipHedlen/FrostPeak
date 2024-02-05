import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="hero relative bg-hero bg-cover min-h-[55vh] -mt-2">
            <div className="hero-content text-center text-white flex flex-row flex-wrap justify-around">
                <div className="mt-10 mb-32">
                    <h1 className="text-4xl font-bold mb-4 font-playfair text-black">Welcome to Ramundberget!</h1>
                    <p className="text-2xl mb-8 font-poppins font-bold text-black">Embark on an unforgettable journey through the enchanting slopes and breathtaking locations of Ramundberget.</p>
                    <Link to="/locations" className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-nunito font-bold rounded-full group">
                    <button
                      className="flex max-w-sm sm:max-w-full bg-darkblue hover:bg-cherryred focus:outline-none text-white text-lg sm:text-xl font-bold shadow-md rounded-full mx-auto p-3 sm:p-3"
                    >
                      <div className="flex items-center justify-center sm:mr-2">
                        Explore
                      </div>
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
  
export default HeroSection;