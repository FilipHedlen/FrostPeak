import { useJsApiLoader } from '@react-google-maps/api';

const useGoogleMaps = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCLHlbEFBZUvZ54kPIWU9wYMep9deh6NWA", // For now im keeping it here since my project is private and my env vite config isnt working
  });

  return { isLoaded, loadError };
};

export default useGoogleMaps;