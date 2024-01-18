import { useEffect, useReducer } from 'react';
import useGooglePlaces from '../../services/places/placeService';
import DetailedViewComponent from '../DetailedView/DetailedView';
import ShowMoreComponent from '../ShowMore/ShowMore';
import { PlacesReducer, PlacesState } from '../../reducers/PlacesReducer';
import { ActionType } from '../../types/ActionTypes';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const initialState: PlacesState = {
  places: [],
  selectedPlace: null,
  filter: null,
  displayedLocations: 5,
};

const PlacesComponent = () => {
  const { isLoaded } = useGooglePlaces();
  const [state, dispatch] = useReducer(PlacesReducer, initialState); 

  const handleClose = () => {
    dispatch({ type: ActionType.SET_SELECTED_PLACE, payload: null });
  };

  const showMoreHandler = () => {
    dispatch({ type: ActionType.SET_DISPLAYED_LOCATIONS, payload: state.displayedLocations + 5 });
  };

  useEffect(() => {
    if (isLoaded) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));

      const request = {
        location: new window.google.maps.LatLng(62.6667, 12.3833),
        radius: 10000,
        type: state.filter || "lodging, restaurants, cafe, parking, bar, gym",
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          dispatch({ type: ActionType.SET_PLACES, payload: results || [] });
        } else {
          console.error("Error fetching places", status);
        }
      });
    }
  }, [isLoaded, state.filter]);

  return (
    <div className="text-center mt-10">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-white font-bold mr-2">Nearby Locations</h2>
        <span className="text-white">|</span>
        <label className="ml-2 mr-2 text-white">Filter by:</label>
        <select
        onChange={(e) => dispatch({ type: ActionType.SET_FILTER, payload: e.target.value })}
        value={state.filter || "all"}
        className="p-0.5 border-gray-300 rounded"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {state.places.slice(0, state.displayedLocations).map((place) => (
              <div
                key={place.place_id}
                className="bg-white p-2 rounded cursor-pointer hover:shadow-md"
                onClick={() => dispatch({ type: ActionType.SET_SELECTED_PLACE, payload: place })}
              >
                <h3 className="text-base font-bold">{place.name}</h3>
                <p className="text-sm">{place.vicinity}</p>
              </div>
            ))}
          </div>
          <ShowMoreComponent showMore={showMoreHandler} />
        </>
      ) : (
        <LoadingSpinner />
      )}
      {state.selectedPlace && <DetailedViewComponent place={state.selectedPlace} onClose={handleClose} />}
    </div>
  );
};

export default PlacesComponent;