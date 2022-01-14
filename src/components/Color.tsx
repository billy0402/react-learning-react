import React from 'react';

import { Color as ColorType } from '../models/color';
import StarRating from './StarRating';

type ColorProp = ColorType;

const Color = ({ title, color, rating }: ColorProp) => {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStar={rating} />
    </section>
  );
};

export default Color;
