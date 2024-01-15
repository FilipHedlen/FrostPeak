import { GoogleMap, Marker } from '@react-google-maps/api';
import useGoogleMaps from '../../services/maps/mapService';

interface MapContainerProps {
    center: google.maps.LatLng | { lat: number; lng: number };
    markerPosition?: google.maps.LatLng| undefined;
}

const MapContainer: React.FC<MapContainerProps> = ({ center, markerPosition }) => {
  const { isLoaded } = useGoogleMaps();

  if (!isLoaded) {
    return <div>Loading google maps</div>;
  }

  const mapOptions = {
    center: center as google.maps.LatLngLiteral,
    zoom: 15,
  };

  return (
    <div style={{ height: '400px', width: '400px', margin: '0 auto' }}>
      <GoogleMap mapContainerStyle={{ height: '100%', width: '100%', borderRadius: '5%' }} {...mapOptions}>
        {markerPosition && <Marker position={markerPosition} icon={{ path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, scale: 5, strokeColor: 'red' }} />}
      </GoogleMap>
    </div>
  );
};

export default MapContainer;