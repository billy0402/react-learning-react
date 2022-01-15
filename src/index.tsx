import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { Color as ColorType } from './models/color';
import colors from './data/colors.json';

type ColorContextType = {
  colors: ColorType[];
};

export const ColorContext = createContext<ColorContextType>({ colors: [] });

ReactDOM.render(
  <ColorContext.Provider value={{ colors }}>
    <App />
  </ColorContext.Provider>,
  document.getElementById('root'),
);
