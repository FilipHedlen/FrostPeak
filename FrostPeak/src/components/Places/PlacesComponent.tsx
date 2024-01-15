import { useEffect, useState } from 'react';
import useGooglePlaces from '../../services/places/placeService';
import DetailedViewComponent from '../DetailedView/DetailedView';

const PlacesComponent = () => {
  const { isLoaded } = useGooglePlaces();
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);

  const handleClose = () => {
    setSelectedPlace(null);
  };

  useEffect(() => {
    if (isLoaded) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));

      const request = {
        location: new window.google.maps.LatLng(62.6667, 12.3833),
        radius: 5000,
        type: "lodging, restaurants",
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
        <div>
          <ul>
            {places.map((place) => (
              <li key={place.place_id} onClick={() => setSelectedPlace(place)}>
                {place.name}
              </li>
            ))}
          </ul>
          {selectedPlace && <DetailedViewComponent place={selectedPlace} onClose={handleClose} />}
        </div>
      ) : (
        <p>Loading Google APIs</p>
      )}
    </div>
  );
};

export default PlacesComponent;