import React, { useContext } from 'react';

import Color from './Color';
import { ColorContext } from '../providers/ColorProvider';

const ColorList = () => {
  const { colors } = useContext(ColorContext);
  if (!colors.length) {
    return <>No Colors Listed. (Add a Color)</>;
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
