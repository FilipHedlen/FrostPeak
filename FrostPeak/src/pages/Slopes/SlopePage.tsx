import SlopeLiftToggle from "../../components/SlopeLiftToggle/SlopeLiftToggle";
import SkiSlopes from "../../components/Slopes/SkiSlopes/SkiSlopes"
import SlopeDifficulty from "../../components/Slopes/SlopeDifficulty/SlopeDifficulty";
import WeatherComponent from "../../components/Weather/WeatherComponent";


const SlopePage = () => {
  return (
    <>
      <WeatherComponent />
      <SlopeDifficulty />
      <SkiSlopes />
      <SlopeLiftToggle />
    </>
  )
};

export default SlopePage