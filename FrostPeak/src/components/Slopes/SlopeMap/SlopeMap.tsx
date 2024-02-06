import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const SlopeMap = () => {
  return (
      <div className="mb-10 ml-5 mr-5 animate-fade-in-left">
        <Zoom>
          <img
            src="/ramund-slopes.webp"
            alt="Ramundbergets ski slope map"
            className="rounded-md md:w-[50%] sm:w-[80%] h-auto mx-auto"
            loading="lazy"
          />
        </Zoom>
    </div>
  );
};

export default SlopeMap;