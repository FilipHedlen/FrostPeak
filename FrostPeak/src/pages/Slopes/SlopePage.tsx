import SlopeLiftToggle from "../../components/SlopeLiftToggle/SlopeLiftToggle";
import SlopeDifficulty from "../../components/Slopes/SlopeDifficulty/SlopeDifficulty";
import WeatherComponent from "../../components/Weather/WeatherComponent";
import SlopeMap from "../../components/Slopes/SlopeMap/SlopeMap";


const SlopePage = () => {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <WeatherComponent />
        <div className="w-full max-w-screen-lg mt-4">
          <SlopeDifficulty />
        </div>
          <SlopeMap />
          <SlopeLiftToggle />
      </div>
    );
};
  
  export default SlopePage;