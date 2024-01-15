import { useEffect } from "react";
import MapContainer from "../Map/MapComponent";
import { IoCloseSharp } from "react-icons/io5";

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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80"
        onClick={(e) => { // If the user clicks outside of the detailed view it closes
            if (e.target === e.currentTarget) {
            onClose();
            }
        }}>
      <div className="bg-white p-6 rounded-lg relative">
        <button
          className="absolute top-2 right-2 text-black text-3xl cursor-pointer"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
        <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
        <p className="mb-2">{place.vicinity}</p>
        <p className="mb-4">{place.rating}</p>
        <MapContainer center={place.geometry?.location || { lat: 0, lng: 0 }} />
      </div>
    </div>
  );
};

export default DetailedViewComponent;