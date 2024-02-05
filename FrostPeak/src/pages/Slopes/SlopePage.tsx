import SlopeLiftToggle from "../../components/SlopeLiftToggle/SlopeLiftToggle";
import SlopeDifficulty from "../../components/Slopes/SlopeDifficulty/SlopeDifficulty";
import WeatherComponent from "../../components/Weather/WeatherComponent";
import SlopeMap from "../../components/Slopes/SlopeMap/SlopeMap";


const SlopePage = () => {
  return (
    <div className="">
      <WeatherComponent />
      <SlopeDifficulty />
      <SlopeMap />
      <SlopeLiftToggle />
    </div>
  )
};

export default SlopePage