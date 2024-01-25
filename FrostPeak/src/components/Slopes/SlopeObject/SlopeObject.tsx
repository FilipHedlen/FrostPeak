import React from 'react';
import SlopeIcon from '../SlopeIcons/SlopeIcon';

export interface Slope {
  number: number;
  name: string;
  difficulty: string;
  secondDifficulty?: string;
  length: string;
}

const SlopeObject: React.FC<Slope> = ({ number, name, difficulty, secondDifficulty, length }) => {
    return (
      <div className="bg-white shadow-lg p-4 mb-1 ml-5 mr-5 rounded-md font-poppins flex flex-row justify-center">
        <h3 className="font-bold text-gray-800 mb-4 mr-5">{number}. {name}</h3>
        <div className="flex items-center mb-2 mr-5">
          <SlopeIcon difficulty={difficulty} />
          {secondDifficulty && ( // If a slope has more than one difficulty then this will render 
          <>
            <p className="ml-1">&</p> <SlopeIcon difficulty={secondDifficulty} />
          </>
        )}
        </div>
        <p className="text-gray-700 mb-2">Length: {length}</p>
      </div>
    );
  };
  
  export default SlopeObject;