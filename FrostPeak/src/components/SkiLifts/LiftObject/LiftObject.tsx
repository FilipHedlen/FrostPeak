import React from 'react';

export interface Lift {
  number: number;
  name: string;
}

const LiftObject: React.FC<Lift> = ({ number, name }) => {
    return (
      <div className="bg-white shadow-lg p-4 mb-4 rounded-md font-poppins">
        <h2 className="font-bold text-gray-800 text-xl mb-2">{number}. {name}</h2>
      </div>
    );
};
  
  export default LiftObject;