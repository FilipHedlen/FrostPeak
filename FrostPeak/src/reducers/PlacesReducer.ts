import { ActionType } from "../types/ActionTypes";

export interface PlacesState {
  places: google.maps.places.PlaceResult[];
  selectedPlace: google.maps.places.PlaceResult | null;
  filter: string | null;
  displayedLocations: number;
}

export interface PlacesAction {
  type: ActionType;
  payload: string | google.maps.places.PlaceResult[] | google.maps.places.PlaceResult | number | null;
}

export const PlacesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
  switch (action.type) {
    case ActionType.SET_PLACES:
      return { ...state, places: action.payload as google.maps.places.PlaceResult[] };
    case ActionType.SET_SELECTED_PLACE:
      return { ...state, selectedPlace: action.payload as google.maps.places.PlaceResult };
    case ActionType.SET_FILTER:
      return { ...state, filter: action.payload as string };
    case ActionType.SET_DISPLAYED_LOCATIONS:
      return { ...state, displayedLocations: action.payload as number };
    default:
      return state;
  }
};