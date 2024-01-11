import { GoogleMap } from '@react-google-maps/api';
import useGoogleMaps from '../../services/maps/mapService';

const MapContainer = () => {
  const { isLoaded, loadError } = useGoogleMaps();

  if (loadError) {
    console.error("Error loading Maps API:", loadError);
    return <div>Error loading map</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  const mapOptions = {
    center: { lat: 62.6667, lng: 12.3833 }, // Lat and Long for Ramundberget ski resort, the zoom will be changed later
    zoom: 10,
  };

  return (
    <div style={{ height: '400px', width: '400px', margin: "0 auto"}}>
      <GoogleMap mapContainerStyle={{ height: '100%', width: '100%', borderRadius: "5%"}} center={mapOptions.center} zoom={mapOptions.zoom} />
    </div>
  );
};

export default MapContainer;