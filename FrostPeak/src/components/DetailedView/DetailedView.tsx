import { useEffect } from "react";
import MapContainer from "../Map/MapComponent";

interface DetailedViewProps {
  place: google.maps.places.PlaceResult;
}

const DetailedViewComponent: React.FC<DetailedViewProps> = ({ place }) => {
  useEffect(() => {
    if (place.geometry) {
      const mapElement = document.getElementById('map');

      if (mapElement) {
        new window.google.maps.Map(mapElement, { // Centers in on the location that the user just clicked
          center: place.geometry.location,
          zoom: 15,
        });
      }
    }
  }, [place]);

  return (
    <div>
      <h2>{place.name}</h2>
      <p>{place.adr_address}</p>
      <p>{place.rating}</p>
      <MapContainer center={place.geometry?.location || { lat: 0, lng: 0 }} />
    </div>
  );
};

export default DetailedViewComponent;