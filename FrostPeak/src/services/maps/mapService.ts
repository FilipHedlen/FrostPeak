import { useJsApiLoader } from '@react-google-maps/api';

const useGoogleMaps = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API_KEY as string,
  });

  return { isLoaded, loadError };
};

export default useGoogleMaps;