import React from 'react';

import Star from './Star';

type StarRatingProp = {
  totalStars?: number;
  selectedStar?: number;
  onRate?: (rating: number) => void;
};

const createArray = (length: number) => [...Array(length)];

const StarRating = ({
  totalStars = 5,
  selectedStar = 0,
  onRate = () => ({}),
}: StarRatingProp) => {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
