import { GoogleMap } from '@react-google-maps/api';
import useGoogleMaps from '../../services/maps/mapService';

interface MapContainerProps {
  center?: google.maps.LatLng | { lat: 0, lng: 0 };
}

const MapContainer: React.FC<MapContainerProps> = ({ center }) => {
  const { isLoaded } = useGoogleMaps();

  if (!isLoaded) {
    return <div>Loading google maps</div>;
  }

  const mapOptions = {
    center,
    zoom: 15,
  };

  return (
    <div className="h-48 sm:h-96 w-full"> 
      <GoogleMap  mapContainerStyle={{ height: '100%', width: '100%', borderRadius: '5%' }} {...mapOptions} />
    </div>
  );
};

export default MapContainer;