import React from 'react';

import { FaTrash } from 'react-icons/fa';

import { Color as ColorType } from '../models/color';
import StarRating from './StarRating';
import useColors from '../hooks/useColors';

type ColorProp = ColorType;

const Color = ({ id, title, color, rating }: ColorProp) => {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStar={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
};

export default Color;
