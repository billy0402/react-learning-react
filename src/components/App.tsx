import React, { useState } from 'react';

import ColorList from './ColorList';
import colorData from '../data/colors.json';

const App = () => {
  const [colors, setColors] = useState(colorData);
  return <ColorList colors={colors} />;
};

export default App;
