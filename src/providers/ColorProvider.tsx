import React, { createContext, useState } from 'react';

import { v4 } from 'uuid';

import { Color as ColorType } from '../models/color';
import colorData from '../data/colors.json';

type ColorProviderProp = {
  children: React.ReactNode;
};

type ColorContextType = {
  colors: ColorType[];
  addColor: (title: string, color: string) => void;
  rateColor: (id: string, rating: number) => void;
  removeColor: (id: string) => void;
};

const ColorContext = createContext<ColorContextType>({
  colors: [],
  addColor: () => ({}),
  rateColor: () => ({}),
  removeColor: () => ({}),
});

const ColorProvider = ({ children }: ColorProviderProp) => {
  const [colors, setColors] = useState<ColorType[]>(colorData);

  const addColor = (title: string, color: string) => {
    const newColors = [...colors, { id: v4(), title, color, rating: 0 }];
    setColors(newColors);
  };

  const rateColor = (id: string, rating: number) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color,
    );
    setColors(newColors);
  };

  const removeColor = (id: string) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
