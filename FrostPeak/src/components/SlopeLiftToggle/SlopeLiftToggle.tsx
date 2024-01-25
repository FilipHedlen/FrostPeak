import { useState } from 'react';
import SlopeList from '../Slopes/SlopeList/SlopeList';
import LiftList from '../SkiLifts/LiftList/LiftList';

const SlopeLiftToggle = () => {
  const [selectedList, setSelectedList] = useState("slopes"); // Slopelist is the default

  const handleToggle = () => {
    setSelectedList((prev) => (prev === "slopes" ? "lifts" : "slopes"));
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Slopes/Lifts</button>
      {selectedList === "slopes" ? <SlopeList /> : <LiftList />}
    </div>
  );
};

export default SlopeLiftToggle;