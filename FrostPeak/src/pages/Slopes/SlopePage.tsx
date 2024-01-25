import SkiSlopes from "../../components/SkiSlopes/SkiSlopes"
import SlopeDifficulty from "../../components/SlopeDifficulty/SlopeDifficulty";
import SlopeList from "../../components/SlopeList/SlopeList";
import WeatherComponent from "../../components/Weather/WeatherComponent";


const SlopePage = () => {
  return (
    <>
      <WeatherComponent />
      <SlopeDifficulty />
      <SkiSlopes />
      <SlopeList />
    </>
  )
};

export default SlopePage