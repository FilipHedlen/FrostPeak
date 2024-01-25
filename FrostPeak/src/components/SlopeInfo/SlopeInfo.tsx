import React from 'react';
import { FaCircle, FaSquareFull } from 'react-icons/fa';
import { FaDiamond } from 'react-icons/fa6';
import { MdRectangle } from 'react-icons/md';

export interface Slope {
  number: number;
  name: string;
  difficulty: string;
  length: string;
}

const SlopeInfo: React.FC<Slope> = ({ number, name, difficulty, length }) => {
  const renderIcon = () => {
    switch (difficulty.toLowerCase()) {
      case 'very difficult':
        return <><FaDiamond className="text-black -mr-1.5" /><FaDiamond className="text-black" /></>;
      case 'difficult':
        return <FaDiamond className="text-black" />;
      case 'semi difficult':
        return <MdRectangle className="text-red-600" />;
      case 'easy':
        return <FaSquareFull className="text-blue-600" />;
      case 'very easy':
        return <FaCircle className="text-green-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-lg p-4 mb-4 rounded-md font-poppins">
      <h2 className="font-bold text-gray-800 text-xl mb-2">{number}. {name}</h2>
      <div className="flex items-center mb-2">
        <span className="text-gray-700 mr-2">{difficulty}</span>
        {renderIcon()}
      </div>
      <p className="text-gray-700 mb-2">Length: {length}</p>
    </div>
  );
};

export default SlopeInfo;