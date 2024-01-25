import { FaCircle, FaSquareFull } from "react-icons/fa";
import { MdRectangle } from "react-icons/md";
import { FaDiamond } from "react-icons/fa6";

const SlopeDifficulty = () => {
  return (
    <div className="bg-white p-1 sm:p-2 mb-5 sm:mb-10 rounded-lg shadow-md max-w-40 mx-auto">
      <p className="text-sm font-nunito font-bold place-self-center border-b-2 border-black mb-2">Marker explanation</p>
      <div className="flex items-center mb-1 sm:mb-2 pb-1 sm:pb-2 border-b-2 border-green-600">
        <FaCircle className="text-green-600 mr-1 sm:mr-2" />
        <p className="text-xs sm:text-sm font-semibold">Very easy</p>
      </div>
      <div className="flex items-center mb-1 sm:mb-2 border-y-blue-600 border-b-2 pb-1 sm:pb-2">
        <FaSquareFull className="text-blue-600 mr-1 sm:mr-2" />
        <p className="text-xs sm:text-sm font-semibold">Easy</p>
      </div>
      <div className="flex items-center mb-1 sm:mb-2 pb-1 sm:pb-2 border-b-2 border-red-600">
        <MdRectangle className="text-red-600 mr-1 sm:mr-2" />
        <p className="text-xs sm:text-sm font-semibold">Semi-difficult</p>
      </div>
      <div className="flex items-center mb-1 sm:mb-2 pb-1 sm:pb-2 border-b-2 border-black">
        <FaDiamond className="text-black mr-1 sm:mr-2" />
        <p className="text-xs sm:text-sm font-semibold">Difficult</p>
      </div>
      <div className="flex items-center">
        <FaDiamond className="text-black -mr-1.5" />
        <FaDiamond className="text-black ml-0.5 sm:ml-1 mr-1 sm:mr-2" />
        <p className="text-xs sm:text-sm font-semibold">Very difficult</p>
      </div>
    </div>
  );
};

export default SlopeDifficulty;