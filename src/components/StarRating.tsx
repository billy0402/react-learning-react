import React from 'react';

import Star from './Star';

type StarRatingProp = {
  totalStars?: number;
  selectedStar?: number;
};

const createArray = (length: number) => [...Array(length)];

const StarRating = ({ totalStars = 5, selectedStar = 0 }: StarRatingProp) => {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStar > i} />
      ))}
      <p>
        {selectedStar} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
