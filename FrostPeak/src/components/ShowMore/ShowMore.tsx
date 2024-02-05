import React from 'react';

interface ShowMoreProps {
  showMore: () => void;
}

const ShowMoreComponent: React.FC<ShowMoreProps> = ({ showMore }) => {
  return (
    <div className="mb-10 mt-4">
      <button
        onClick={showMore}
        className="bg-darkblue hover:bg-cherryred focus:outline-none text-white text-lg sm:text-xl font-bold shadow-md rounded-full mx-auto p-3 sm:p-3"
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMoreComponent;