import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const SlopeMap = () => {
  return (
      <div className="m-10 animate-fade-in-left">
        <Zoom>
          <img
            src="/ramund-slopes.webp"
            alt="Ramundbergets ski slope map"
            className="rounded-md md:w-[60%] sm:w-[80%] h-auto mx-auto"
            loading="lazy"
          />
        </Zoom>
    </div>
  );
};

export default SlopeMap;