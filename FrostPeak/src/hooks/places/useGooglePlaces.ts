import { useJsApiLoader } from '@react-google-maps/api';

const useGooglePlacesHook = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-places-script',
    googleMapsApiKey: "AIzaSyCLHlbEFBZUvZ54kPIWU9wYMep9deh6NWA", 
    libraries: ['places'],
  });

  return { isLoaded, loadError };
};

export default useGooglePlacesHook;