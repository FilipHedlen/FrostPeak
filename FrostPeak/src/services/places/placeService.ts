export const initializePlacesAPI = () => {
    if (window.google && window.google.maps && window.google.maps.places) {
      console.log("Places API is initialized");
    } else {
      console.error("Places API is not initialized");
    }
};