declare global { // Declare structure of the google object in the window interface.
    interface Window {
      google: {
        maps: {
           Map: new (element: HTMLElement, options: google.maps.MapOptions) => google.maps.Map;
        };
      };
    }
  }
  
const loadGoogleScript = (callback: () => void) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    script.onload = callback;
};
  

export const initMap = () => { // Initialize google maps
    const mapElement = document.getElementById('map');

    if (mapElement) {
      const map = new window.google.maps.Map(mapElement, { // Create a new Google Map instance
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
};
  
export const loadGoogleMap = () => {
    loadGoogleScript(() => {
      initMap();
    });
};