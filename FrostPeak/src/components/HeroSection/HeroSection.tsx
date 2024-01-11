import { Link } from "react-router-dom";
import WeatherComponent from "../Weather/WeatherComponent";

const HeroSection = () => {
    return (
      <section className="hero relative h-screen bg-cover bg-center overflow-y-hidden" style={{ backgroundImage: 'url("/ramund.jpg")' }}>
        <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="hero-content text-center text-white absolute inset-0 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Ramundberget!</h1>
          <p className="text-lg mb-8">Discover the beauty of our slopes and locations.</p>
          <div className="mb-60">
            <Link to="/locations" className="text-white font-bold">
              Explore
            </Link>
          </div>
          <div>
            <WeatherComponent />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;