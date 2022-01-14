import React, { useState } from 'react';

import ColorList from './ColorList';
import colorData from '../data/colors.json';

const App = () => {
  const [colors, setColors] = useState(colorData);
  return (
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
  );
};

export default App;
