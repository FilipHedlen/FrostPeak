import useGoogleMapsHook from "../../hooks/maps/useGoogleMaps";

const useGoogleMaps = () => {
  const { isLoaded, loadError } = useGoogleMapsHook();

  if (loadError) {
    console.error("Error with loading Google Maps API", loadError);
  }

  return { isLoaded };
};

export default useGoogleMaps;