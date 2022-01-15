import { useContext } from 'react';

import { ColorContext } from '../providers/ColorProvider';

const useColors = () => useContext(ColorContext);

export default useColors;
