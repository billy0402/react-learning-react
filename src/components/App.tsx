import React, { useState } from 'react';

import { v4 } from 'uuid';

import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import colorData from '../data/colors.json';

const App = () => {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [...colors, { id: v4(), title, color, rating: 0 }];
          setColors(newColors);
        }}
      />
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color,
          );
          setColors(newColors);
        }}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />
    </>
  );
};

export default App;
