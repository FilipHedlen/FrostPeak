import React from 'react';

interface ShowMoreProps {
  onClick: () => void;
}

const ShowMoreComponent: React.FC<ShowMoreProps> = ({ onClick }) => {
  return (
    <button
      className="text-black mt-4 p-2 bg-white rounded hover:bg-amber-300"
      onClick={onClick}
    >
      Show More
    </button>
  );
};

export default ShowMoreComponent;