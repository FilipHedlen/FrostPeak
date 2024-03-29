import { useState } from 'react';
import SlopeList from '../Slopes/SlopeList/SlopeList';
import LiftList from '../SkiLifts/LiftList/LiftList';
import { TbAerialLift } from "react-icons/tb";
import { FaPersonSkiing } from 'react-icons/fa6';

const SlopeLiftToggle = () => {
  const [selectedList, setSelectedList] = useState("slopes"); // Slopelist is the default state

  const handleToggle = (listType: string) => {
    setSelectedList(listType);
  };

  return (
    <div className="text-center mt-24 mr-5 ml-5 animate-fade-in-left">
      <div className="flex justify-center">
        <button
          onClick={() => handleToggle("slopes")}
          className={`
            ${
              selectedList === "slopes" ? "bg-white" : "bg-lightgrey"
            } w-48 px-6 py-3 text-xl cursor-pointer border-solid border-b-2 border-grey`}
        >
            <p>
                Slopes 
                <FaPersonSkiing className="inline-block mr-2 text-black text-2xl ml-2" />
            </p>
        </button>
        <button
          onClick={() => handleToggle("lifts")}
          className={`
            ${
              selectedList === "lifts" ? "bg-white" : "bg-lightgrey"
            } w-48 px-6 py-3 text-xl cursor-pointer border-solid border-b-2 border-grey`}
        >
            <p>
                Lifts
                <TbAerialLift className="inline-block mr-2 text-black text-2xl ml-2" />
            </p>
        </button>
      </div>
      {selectedList === "slopes" ? <SlopeList /> : <LiftList />}
    </div>
  );
};

export default SlopeLiftToggle;