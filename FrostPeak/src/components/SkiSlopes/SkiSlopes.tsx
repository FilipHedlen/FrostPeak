import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const SkiSlopes = () => {
  return (
      <div className="mb-5 mr-5">
        <Zoom>
          <img
            src="/ramund-slopes.jpg"
            alt="Ramundbergets ski slope map"
            className="rounded-md w-[50%] h-auto mx-auto"
          />
        </Zoom>
    </div>
  );
};

export default SkiSlopes;