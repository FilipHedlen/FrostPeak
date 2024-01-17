import { useEffect, useState } from 'react';
import useGooglePlaces from '../../services/places/placeService';
import DetailedViewComponent from '../DetailedView/DetailedView';
import ShowMoreComponent from '../ShowMore/ShowMore';

const PlacesComponent = () => {
  const { isLoaded } = useGooglePlaces();
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const [displayedLocations, setDisplayedLocations] = useState<number>(6); // Adjust the default number of locations to display
  const locationsToShow = places.slice(0, displayedLocations);

  const handleClose = () => {
    setSelectedPlace(null);
  };

  const handleShowMore = () => {
    // Increase the number of displayed locations
    setDisplayedLocations(displayedLocations + 5); // Adjust the number to display more or less locations
  };

  useEffect(() => {
    if (isLoaded) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));

      const request = {
        location: new window.google.maps.LatLng(62.6667, 12.3833),
        radius: 10000,
        type: filter || "lodging, restaurants, cafe, parking, bar, gym",
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
    <div className="text-center mt-10">
      <h2 className="text-white font-bold">Nearby Locations</h2>
      <div className="mb-4 flex justify-center">
        <label className="mr-2 text-white">Filter by:</label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter || "all"}
          className="p-2 border-gray-300 rounded"
        >
          <option value="all">All</option>
          <option value="lodging">Lodging</option>
          <option value="parking">Parking</option>
          <option value="restaurants">Restaurants</option>
          <option value="cafe">Cafes</option>
          <option value="bar">Bars</option>
          <option value="gym">Gyms</option>
        </select>
      </div>
      {isLoaded ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locationsToShow.map((place) => (
              <div
                key={place.place_id}
                className="bg-white p-2 rounded cursor-pointer hover:shadow-md"
                onClick={() => setSelectedPlace(place)}
              >
                <h3 className="text-base font-bold">{place.name}</h3>
                <p className="text-sm">{place.vicinity}</p>
              </div>
            ))}
          </div>
          {places.length > displayedLocations && (
            <ShowMoreComponent onClick={handleShowMore} />
          )}
        </>
      ) : (
        <p>Loading Google APIs</p>
      )}
      {selectedPlace && <DetailedViewComponent place={selectedPlace} onClose={handleClose} />}
    </div>
  );
};

export default PlacesComponent;