import useGoogleAPIsHook from "../../hooks/googleAPI/googleAPI";

const useGoogleMaps = () => {
  const { isLoaded, loadError } = useGoogleAPIsHook({});

  if (loadError) {
    console.error("Error with loading Google APIs", loadError);
  }

  return { isLoaded };
};

export default useGoogleMaps;