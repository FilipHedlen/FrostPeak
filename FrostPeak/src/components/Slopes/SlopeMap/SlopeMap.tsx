import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const SlopeMap = () => {
  return (
      <div className="mb-5 ml-5 mr-5">
        <Zoom>
          <img
            src="/ramund-slopes.jpg"
            alt="Ramundbergets ski slope map"
            className="rounded-md md:w-[50%] sm:w-[80%] h-auto mx-auto"
          />
        </Zoom>
    </div>
  );
};

export default SlopeMap;