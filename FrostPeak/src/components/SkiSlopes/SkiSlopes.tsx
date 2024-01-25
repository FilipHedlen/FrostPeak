import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import SlopeDifficulty from '../SlopeDifficulty/SlopeDifficulty';
import WeatherComponent from '../Weather/WeatherComponent';

const SkiSlopes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="mb-5 md:col-span-2">
        <WeatherComponent />
      </div>
      <div className="mb-5">
        <Zoom>
          <img
            src="/ramund-slopes.jpg"
            alt="Ramundbergets ski slope map"
            className="rounded-md w-full h-auto mx-auto"
          />
        </Zoom>
      </div>
      <div className="md:col-start-3">
        <SlopeDifficulty />
      </div>
    </div>
  );
};

export default SkiSlopes;