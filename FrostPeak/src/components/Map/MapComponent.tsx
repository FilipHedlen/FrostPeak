import { GoogleMap } from '@react-google-maps/api';
import useGoogleMaps from '../../services/maps/mapService';

const MapContainer = () => { // For now this is a simple display of google maps (ramundberget) 
  const { isLoaded } = useGoogleMaps();

  if (!isLoaded) {
    return <div>Loading google maps</div>;
  }

  const mapOptions = {
    center: { lat: 62.6667, lng: 12.3833 }, // Lat and Long for Ramundberget ski resort, the zoom will be changed later
    zoom: 10, // How zoomed in it should be, keeping at 10 for now
  };

  return ( // Will try to incorporate tailwind instead of regular JSX css beneath
    <div style={{ height: '400px', width: '400px', margin: "0 auto"}}> 
      <GoogleMap mapContainerStyle={{ height: '100%', width: '100%', borderRadius: "5%"}} center={mapOptions.center} zoom={mapOptions.zoom} />
    </div>
  );
};

export default MapContainer;