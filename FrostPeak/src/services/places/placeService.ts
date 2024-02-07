import useGoogleAPIsHook from "../../hooks/googleAPI/googleAPI";

const useGooglePlaces = () => {
  const { isLoaded, loadError } = useGoogleAPIsHook({ libraries: ['places'] });

  if (loadError) {
    console.error("Error with loading Google APIs", loadError);
  }

  return { isLoaded };
};

export default useGooglePlaces;