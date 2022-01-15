import React from 'react';

import { useParams } from 'react-router';

import useColors from '../hooks/useColors';

const ColorDetail = () => {
  const { id } = useParams();
  const { colors } = useColors();

  const foundColor = colors.find((color) => color.id === id);

  return (
    <>
      <div
        style={{ backgroundColor: foundColor?.color, height: 100, width: 100 }}
      ></div>
      <h1>{foundColor?.title}</h1>
      <h1>{foundColor?.color}</h1>
    </>
  );
};

export default ColorDetail;
