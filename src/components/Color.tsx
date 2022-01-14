import React from 'react';

import { FaTrash } from 'react-icons/fa';

import { Color as ColorType } from '../models/color';
import StarRating from './StarRating';

type ColorProp = ColorType & {
  onRate?: (id: string, rating: number) => void;
  onRemove?: (id: string) => void;
};

const Color = ({
  id,
  title,
  color,
  rating,
  onRate = () => ({}),
  onRemove = () => ({}),
}: ColorProp) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStar={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
};

export default Color;
