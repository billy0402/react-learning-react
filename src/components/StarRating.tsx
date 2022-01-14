import React, { useState } from 'react';

import Star from './Star';

type StarRatingProp = {
  totalStars?: number;
};

const createArray = (length: number) => [...Array(length)];

const StarRating = ({ totalStars = 5 }: StarRatingProp) => {
  const [selectedStar, setSelectedStar] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => setSelectedStar(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
