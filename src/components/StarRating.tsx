import React, { useState } from 'react';

import Star from './Star';

type StarRatingProp = {
  totalStars?: number;
  style?: React.CSSProperties;
  [key: string]: any;
};

const createArray = (length: number) => [...Array(length)];

const StarRating = ({
  totalStars = 5,
  style = {},
  ...props
}: StarRatingProp) => {
  const [selectedStar, setSelectedStar] = useState(0);
  return (
    <div style={{ padding: '5px', ...style }} {...props}>
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
    </div>
  );
};

export default StarRating;
