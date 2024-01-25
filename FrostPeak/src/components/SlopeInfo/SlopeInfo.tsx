import React from 'react';
import SlopeIcon from '../SlopeIcons/SlopeIcon';

export interface Slope {
  number: number;
  name: string;
  difficulty: string;
  secondDifficulty?: string;
  length: string;
}

const SlopeInfo: React.FC<Slope> = ({ number, name, difficulty, secondDifficulty, length }) => {
    return (
      <div className="bg-white shadow-lg p-4 mb-4 rounded-md font-poppins">
        <h2 className="font-bold text-gray-800 text-xl mb-2">{number}. {name}</h2>
        <div className="flex items-center mb-2">
          <SlopeIcon difficulty={difficulty} />
          {secondDifficulty && ( // If a slope has more than one difficulty then this will render 
          <>
            <SlopeIcon difficulty={secondDifficulty} />
          </>
        )}
        </div>
        <p className="text-gray-700 mb-2">Length: {length}</p>
      </div>
    );
  };
  
  export default SlopeInfo;