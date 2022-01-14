import React from 'react';

import { FaStar } from 'react-icons/fa';

type StarProp = {
  selected?: boolean;
  onSelect?: () => void;
};

const Star = ({ selected = false, onSelect = () => ({}) }: StarProp) => {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />;
};

export default Star;
