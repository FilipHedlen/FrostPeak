import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import SlopeDifficulty from '../SlopeDifficulty/SlopeDifficulty';
import WeatherComponent from '../Weather/WeatherComponent';

const SkiSlopes = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="mb-5">
        <WeatherComponent />
      </div>
      <div className="mb-5">
        <Zoom>
          <img
            src="/ramund-slopes.jpg"
            alt="Ramundbergets ski slope map"
            className="rounded-md w-[90%] sm:w-[50%] h-auto mx-auto"
          />
        </Zoom>
      </div>
      <div>
        <SlopeDifficulty />
      </div>
    </div>
  )
};

export default SkiSlopes