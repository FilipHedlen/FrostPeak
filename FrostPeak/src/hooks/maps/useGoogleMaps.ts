import { useJsApiLoader } from '@react-google-maps/api';

const useGoogleMapsHook = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCLHlbEFBZUvZ54kPIWU9wYMep9deh6NWA",
  });

  return { isLoaded, loadError };
};

export default useGoogleMapsHook;