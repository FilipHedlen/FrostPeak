import React from 'react';
import { FaCircle, FaSquareFull } from 'react-icons/fa';
import { MdRectangle } from 'react-icons/md';
import { FaDiamond } from 'react-icons/fa6';

interface SlopeIconProps {
  difficulty: string;
}

const SlopeIcon: React.FC<SlopeIconProps> = ({ difficulty }) => {
  switch (difficulty.toLowerCase()) {
    case 'very difficult':
      return <><FaDiamond className="text-black -mr-0.5" /><FaDiamond className="text-black" /></>;
    case 'difficult':
      return <FaDiamond className="text-black" />;
    case 'intermediate':
      return <MdRectangle className="text-red-600" />;
    case 'easy':
      return <FaSquareFull className="text-blue-600" />;
    case 'very easy':
      return <FaCircle className="text-green-600" />;
    default:
      return null;
  }
};

export default SlopeIcon;