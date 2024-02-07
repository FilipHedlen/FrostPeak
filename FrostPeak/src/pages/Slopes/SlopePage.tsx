import SlopeLiftToggle from "../../components/SlopeLiftToggle/SlopeLiftToggle";
import SlopeDifficulty from "../../components/Slopes/SlopeDifficulty/SlopeDifficulty";
import WeatherComponent from "../../components/Weather/WeatherComponent";
import SlopeMap from "../../components/Slopes/SlopeMap/SlopeMap";


const SlopePage = () => {
    return (
      <div className="flex flex-col items-around justify-around p-4">
        <div className="flex flex-wrap justify-center gap-2 w-full">
          <WeatherComponent />
          <SlopeMap />
          <SlopeDifficulty />
        </div>
        <SlopeLiftToggle />
      </div>
    );
};
  
  export default SlopePage;