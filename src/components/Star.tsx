import React from 'react';

import { FaStar } from 'react-icons/fa';

type StarProp = {
  selected?: boolean;
};

const Star = ({ selected = false }: StarProp) => {
  return <FaStar color={selected ? 'red' : 'gray'} />;
};

export default Star;
