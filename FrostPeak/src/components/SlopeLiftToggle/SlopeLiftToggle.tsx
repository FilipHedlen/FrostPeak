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
    <div>
      <button
        onClick={() => handleToggle("slopes")}
        className={`
          ${
            selectedList === "slopes" ? "bg-white" : "bg-gray-400"
          } px-4 py-2 text-lg mr-4 border-none cursor-pointer inline-block`}
      >
        Slopes <FaPersonSkiing className="ml-2" />
      </button>
      <button
        onClick={() => handleToggle("lifts")}
        className={`
          ${
            selectedList === "lifts" ? "bg-white" : "bg-gray-400"
          } px-4 py-2 text-lg border-none cursor-pointer inline-block`}
      >
        Lifts <TbAerialLift className="ml-2" />
      </button>
      {selectedList === "slopes" ? <SlopeList /> : <LiftList />}
    </div>
  );
};

export default SlopeLiftToggle;