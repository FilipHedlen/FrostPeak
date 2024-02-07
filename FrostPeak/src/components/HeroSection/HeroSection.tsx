import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="hero relative min-h-[55vh] animate-slide-in-top">
            <img 
                src="/bg-hero.webp" 
                alt="Hero Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                loading="lazy"
            />
            <div className="hero-content text-center text-white flex flex-row flex-wrap justify-around relative z-1">
                <div className="mt-40 mb-32">
                    <h1 className="text-4xl font-bold mb-4 font-playfair text-white">Welcome to Ramundberget!</h1>
                    <p className="text-2xl mb-8 font-poppins font-bold text-white">Embark on an unforgettable journey through the enchanting slopes and breathtaking locations of Ramundberget.</p>
                    <Link to="/locations" className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-nunito font-bold rounded-full group">
                        <button
                          className="bg-darkblue hover:bg-cherryred focus:outline-none text-white text-lg sm:text-xl font-bold shadow-md rounded-full mx-auto p-3 sm:p-3"
                        >
                          Explore
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
  
export default HeroSection;