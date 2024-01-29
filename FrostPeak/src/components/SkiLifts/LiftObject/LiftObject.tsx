import React from 'react';

export interface Lift {
  number: number;
  name: string;
}

const LiftObject: React.FC<Lift> = ({ number, name }) => {
    return (
      <div className="bg-white shadow-lg p-4 mb-1 ml-5 mr-5 rounded-md font-poppins flex flex-row justify-center">
        <h2 className="font-bold text-gray-800 mb-2">{number}. {name}</h2>
      </div>
    );
};
  
  export default LiftObject;