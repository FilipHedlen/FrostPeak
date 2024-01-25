import SlopeLiftToggle from "../../components/SlopeLiftToggle/SlopeLiftToggle";
import SlopeDifficulty from "../../components/Slopes/SlopeDifficulty/SlopeDifficulty";
import WeatherComponent from "../../components/Weather/WeatherComponent";
import SlopeMap from "../../components/Slopes/SlopeMap/SlopeMap";


const SlopePage = () => {
  return (
    <>
      <WeatherComponent />
      <SlopeDifficulty />
      <SlopeMap />
      <SlopeLiftToggle />
    </>
  )
};

export default SlopePage