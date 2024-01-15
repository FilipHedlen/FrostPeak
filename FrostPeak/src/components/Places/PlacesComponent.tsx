import { useEffect, useState } from 'react';
import useGooglePlaces from '../../services/places/placeService';
import DetailedViewComponent from '../DetailedView/DetailedView';

const PlacesComponent = () => {
  const { isLoaded } = useGooglePlaces();
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const handleClose = () => {
    setSelectedPlace(null);
  };

  useEffect(() => {
    if (isLoaded) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));

      const request = {
        location: new window.google.maps.LatLng(62.6667, 12.3833),
        radius: 5000,
        type: filter || "lodging, restaurants",
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results || []); 
        } else {
          console.error("Error fetching places", status);
        }
      });
    }
  }, [isLoaded, filter]);

  return (
    <div>
      <h2 className="text-white font-bold">Nearby Locations</h2>
      <div className="mb-4">
        <label className="mr-2 text-white">Filter by:</label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter || "all"}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="all">All</option>
          <option value="lodging">Lodging</option>
          <option value="restaurants">Restaurants</option>
        </select>
      </div>
      {isLoaded ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {places.map((place) => (
            <div
              key={place.place_id}
              className="bg-white p-4 rounded cursor-pointer hover:shadow-md"
              onClick={() => setSelectedPlace(place)}
            >
              <h3 className="text-lg font-bold">{place.name}</h3>
              <p>{place.vicinity}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading Google APIs</p>
      )}
      {selectedPlace && <DetailedViewComponent place={selectedPlace} onClose={handleClose} />}
    </div>
  );
};

export default PlacesComponent;