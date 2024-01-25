import SlopeIcon from "../SlopeIcons/SlopeIcon";

const SlopeDifficulty = () => {
  return (
    <div className="bg-white p-1 sm:p-2 mb-5 sm:mb-10 rounded-lg shadow-md max-w-40 mx-auto mt-5">
      <p className="text-sm font-nunito font-bold place-self-center border-b-2 border-black mb-2">Marker explanation</p>
      <div className="flex items-center mb-1 sm:mb-2 pb-1 sm:pb-2 border-b-2 border-green-600">
        <SlopeIcon difficulty="very easy" />
        <p className="text-xs sm:text-sm font-semibold ml-1">Very easy</p>
      </div>
      <div className="flex items-center mb-1 sm:mb-2 border-y-blue-600 border-b-2 pb-1 sm:pb-2">
        <SlopeIcon difficulty="easy" />
        <p className="text-xs sm:text-sm font-semibold ml-1">Easy</p>
      </div>
      <div className="flex items-center mb-1 sm:mb-2 pb-1 sm:pb-2 border-b-2 border-red-600">
        <SlopeIcon difficulty="intermediate" />
        <p className="text-xs sm:text-sm font-semibold ml-1">Intermediate</p>
      </div>
      <div className="flex items-center mb-1 sm:mb-2 pb-1 sm:pb-2 border-b-2 border-black">
        <SlopeIcon difficulty="difficult" />
        <p className="text-xs sm:text-sm font-semibold ml-1">Difficult</p>
      </div>
      <div className="flex items-center">
        <SlopeIcon difficulty="very difficult" />
        <p className="text-xs sm:text-sm font-semibold ml-1">Very difficult</p>
      </div>
    </div>
  );
};

export default SlopeDifficulty;