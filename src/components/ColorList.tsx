import React from 'react';

import Color from './Color';
import { Color as ColorType } from '../models/color';

type ColorListProp = {
  colors: ColorType[];
  onRateColor?: (id: string, rating: number) => void;
  onRemoveColor?: (id: string) => void;
};

const ColorList = ({
  colors = [],
  onRateColor = () => ({}),
  onRemoveColor = () => ({}),
}: ColorListProp) => {
  if (!colors.length) {
    return <>No Colors Listed.</>;
  }

  return (
    <>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRate={onRateColor}
          onRemove={onRemoveColor}
        />
      ))}
    </>
  );
};

export default ColorList;
