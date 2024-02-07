import { useEffect } from "react";
import MapContainer from "../Map/MapComponent";
import { IoCloseSharp } from "react-icons/io5";
import StarRating from "../StarRating/StarRating";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface DetailedViewProps {
  place: google.maps.places.PlaceResult;
  onClose: () => void; // Callback to close the detailed view
}

const DetailedViewComponent: React.FC<DetailedViewProps> = ({ place, onClose }) => {
  useEffect(() => {
    if (place.geometry) {
      const mapElement = document.getElementById('map');

      if (mapElement) {
        new window.google.maps.Map(mapElement, {
          center: place.geometry.location,
          zoom: 15,
        });
      }
    }
  }, [place]);

  return (
    <div 
        className="fixed top-0 left-0 w-full h-full flex justify-center overflow-auto items-center bg-black bg-opacity-80 z-50"
        onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
        }}>
      <div className="bg-white p-6 rounded-lg relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mr-5 ml-5">
        <button
          className="absolute top-2 right-2 text-black text-3xl cursor-pointer"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
        <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
        <p className="mb-2">{place.vicinity}</p>
        <div className="mb-4 mx-auto text-center">
          <StarRating rating={place.rating || 0} />
        </div>
        {place.photos && place.photos.length > 0 && (
          <div className="hidden sm:flex items-center justify-center">
            <Zoom>
              <img
                src={place.photos[0].getUrl({ maxWidth: 400, maxHeight: 400 })}
                alt={place.name}
                className="mb-4 rounded"
              />
            </Zoom>
          </div>
        )}
        <div className="sm:mt-4">
          <MapContainer center={place.geometry?.location || { lat: 0, lng: 0 }} />
        </div>
      </div>
    </div>
  );
};

export default DetailedViewComponent;