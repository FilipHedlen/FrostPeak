import HeroSection from "../../components/HeroSection/HeroSection"; 
import WeatherComponent from "../../components/Weather/WeatherComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="flex justify-center items-center animate-slide-in-top">
        <WeatherComponent />
      </div>
    </div>
  );
};

export default HomePage;