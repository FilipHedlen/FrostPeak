import { useJsApiLoader } from '@react-google-maps/api';

const useGoogleAPIsHook = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-script',
    googleMapsApiKey: "AIzaSyCLHlbEFBZUvZ54kPIWU9wYMep9deh6NWA",
    libraries: ['places'],
  });

  return { isLoaded, loadError };
};

export default useGoogleAPIsHook;