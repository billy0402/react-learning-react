import React from 'react';

import Color from './Color';
import useColors from '../hooks/useColors';

const ColorList = () => {
  const { colors } = useColors();
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
