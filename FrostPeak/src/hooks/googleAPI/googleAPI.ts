import { useJsApiLoader } from '@react-google-maps/api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGoogleAPIsHook = (options: any) => {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-script',
    googleMapsApiKey,
    ...options,
  });

  return { isLoaded, loadError };
};

export default useGoogleAPIsHook;