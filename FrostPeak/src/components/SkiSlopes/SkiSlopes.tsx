import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import SlopeDifficulty from '../SlopeDifficulty/SlopeDifficulty';

const SkiSlopes = () => {
  return (
    <div>
      <Zoom>
        <img
          src="/ramund-slopes.jpg"
          alt="Ramundbergets ski slope map"
          className="rounded-md w-[50%] h-auto mx-auto"
        />
      </Zoom>
      <div>
        <SlopeDifficulty />
      </div>
    </div>
  )
}

export default SkiSlopes