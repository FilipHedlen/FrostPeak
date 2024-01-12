import { useEffect, useState } from 'react';
import useGooglePlaces from '../../services/places/placeService';

const PlacesComponent = () => { // For now i'm displaying a simple list of nearby locations which WORKS hallelujah
  const { isLoaded } = useGooglePlaces();
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);

  useEffect(() => {
    if (isLoaded) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));

      const request = {
        location: new window.google.maps.LatLng(62.6667, 12.3833), // Ramundbergets lat+long
        radius: 5000, // Locations in a 5km radius
        type: 'lodging, restaurants', // Type of locations, for now I keep it to restaurants and lodging
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results || []); 
        } else {
          console.error("Error fetching places", status);
        }
      });
    }
  }, [isLoaded]);

  return (
    <div>
      <h2>Nearby Places</h2>
      {isLoaded ? (
        <ul>
          {places.map((place) => (
            <li key={place.place_id}>{place.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading Google APIs</p>
      )}
    </div>
  );
};

export default PlacesComponent;