import React from 'react';

import Color from './Color';
import { Color as ColorType } from '../models/color';

type ColorListProp = {
  colors: ColorType[];
};

const ColorList = ({ colors = [] }: ColorListProp) => {
  if (!colors.length) {
    return <>No Colors Listed.</>;
  }

  return (
    <>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </>
  );
};

export default ColorList;
