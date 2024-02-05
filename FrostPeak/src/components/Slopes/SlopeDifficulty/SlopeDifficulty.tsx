import SlopeIcon from "../SlopeIcons/SlopeIcon";

const SlopeDifficulty = () => {
  return (
    <div className="bg-white p-3 sm:p-6 mb-8 sm:mb-12 rounded-lg shadow-md max-w-md mx-auto mt-8 top-0">
      <p className="text-base sm:text-lg font-nunito font-bold place-self-center border-b-2 border-black mb-4">
        Marker explanation
      </p>
      <div className="flex items-center mb-2 sm:mb-4 pb-2 sm:pb-4 border-b-2 border-green">
        <SlopeIcon difficulty="very easy" />
        <p className="text-sm sm:text-base font-semibold ml-2">Very easy</p>
      </div>
      <div className="flex items-center mb-2 sm:mb-4 border-blue border-b-2 pb-2 sm:pb-4">
        <SlopeIcon difficulty="easy" />
        <p className="text-sm sm:text-base font-semibold ml-2">Easy</p>
      </div>
      <div className="flex items-center mb-2 sm:mb-4 pb-2 sm:pb-4 border-b-2 border-red">
        <SlopeIcon difficulty="intermediate" />
        <p className="text-sm sm:text-base font-semibold ml-2">Intermediate</p>
      </div>
      <div className="flex items-center mb-2 sm:mb-4 pb-2 sm:pb-4 border-b-2 border-black">
        <SlopeIcon difficulty="difficult" />
        <p className="text-sm sm:text-base font-semibold ml-2">Difficult</p>
      </div>
      <div className="flex items-center">
        <SlopeIcon difficulty="very difficult" />
        <p className="text-sm sm:text-base font-semibold ml-2">Very difficult</p>
      </div>
    </div>
  );
};

export default SlopeDifficulty;