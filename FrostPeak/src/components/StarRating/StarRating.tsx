import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex justify-center">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-gold">
          ★
        </span>
      ))}
      {halfStar > 0 && <span className="text-gold">★</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="text-lightgrey">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;