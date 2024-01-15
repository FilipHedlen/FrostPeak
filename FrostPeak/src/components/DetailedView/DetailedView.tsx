import { useEffect } from "react";
import MapContainer from "../Map/MapComponent";

interface DetailedViewProps {
    place: google.maps.places.PlaceResult;
  }
  
  const DetailedViewComponent: React.FC<DetailedViewProps> = ({ place }) => {
    useEffect(() => {
        new window.google.maps.Marker({ // Marker to specify exactly where the position of the location is
          position: place.geometry?.location,
          icon: {
            path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            scale: 5,
            strokeColor: 'red',
          },
        });
      }, [place]);

    return (
      <div>
        <h2>{place.name}</h2>
        <p>{place.adr_address}</p>
        <p>{place.rating}</p>
        <MapContainer center={place.geometry?.location || { lat: 0, lng: 0 }} markerPosition={place.geometry?.location} />
      </div>
    );
  };
  
  export default DetailedViewComponent;