import React from 'react';

interface ShowMoreProps {
  onClick: () => void;
}

const ShowMoreComponent: React.FC<ShowMoreProps> = ({ onClick }) => {
  return (
    <div className="mb-4 mt-4">
        <button
          onClick={onClick}
          className="flex max-w-sm sm:max-w-full bg-indigo-500 hover:bg-indigo-700 focus:outline-none text-white text-lg sm:text-xl uppercase font-bold shadow-md rounded-full mx-auto p-3 sm:p-5"
        >
        <div className="flex items-center justify-center sm:mr-2">
          Show more
        </div>
        </button>
    </div>
  );
};

export default ShowMoreComponent;