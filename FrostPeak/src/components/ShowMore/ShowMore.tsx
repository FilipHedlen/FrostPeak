import React from 'react';

interface ShowMoreProps {
  showMore: () => void;
}

const ShowMoreComponent: React.FC<ShowMoreProps> = ({ showMore }) => {
  return (
    <div className="mb-10 mt-4">
      <button
        onClick={showMore}
        className="flex max-w-sm sm:max-w-full bg-darkblue hover:bg-cherryred focus:outline-none text-white text-lg sm:text-xl font-bold shadow-md rounded-full mx-auto p-3 sm:p-3"
      >
        <div className="flex items-center justify-center sm:mr-2">
          Show more
        </div>
      </button>
    </div>
  );
};

export default ShowMoreComponent;