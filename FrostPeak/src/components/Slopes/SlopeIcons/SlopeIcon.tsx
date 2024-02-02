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
      return <><FaDiamond className="text-black -mr-0.5 text-2xl" /><FaDiamond className="text-black text-2xl" /></>;
    case 'difficult':
      return <FaDiamond className="text-black text-2xl" />;
    case 'intermediate':
      return <MdRectangle className="text-red text-3xl" />;
    case 'easy':
      return <FaSquareFull className="text-blue text-2xl" />;
    case 'very easy':
      return <FaCircle className="text-green text-2xl" />;
    default:
      return null;
  }
};

export default SlopeIcon;