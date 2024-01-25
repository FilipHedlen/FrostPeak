import LiftList from "../../components/SkiLifts/LiftList/LiftList";
import SkiSlopes from "../../components/Slopes/SkiSlopes/SkiSlopes"
import SlopeDifficulty from "../../components/Slopes/SlopeDifficulty/SlopeDifficulty";
import SlopeList from "../../components/Slopes/SlopeList/SlopeList";
import WeatherComponent from "../../components/Weather/WeatherComponent";


const SlopePage = () => {
  return (
    <>
      <WeatherComponent />
      <SlopeDifficulty />
      <SkiSlopes />
      <SlopeList />
      <LiftList />
    </>
  )
};

export default SlopePage