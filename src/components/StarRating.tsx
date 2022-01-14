import React from 'react';

import Star from './Star';

type StarRatingProp = {
  totalStars?: number;
};

const createArray = (length: number) => [...Array(length)];

const StarRating = ({ totalStars = 5 }: StarRatingProp) => {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} />
      ))}
    </>
  );
};

export default StarRating;
