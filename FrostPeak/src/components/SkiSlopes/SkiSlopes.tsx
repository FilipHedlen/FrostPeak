import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const SkiSlopes = () => {
  return (
    <div>
      <Zoom>
        <img src="/ramund-slopes.jpg" alt="Ramundbergets ski slope map" className="rounded-md" />
      </Zoom>
    </div>
  )
}

export default SkiSlopes