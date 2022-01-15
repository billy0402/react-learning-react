import { useState } from 'react';

const useIterator = (items = [], initialIndex = 0) => {
  const [index, setIndex] = useState(initialIndex);

  const prev = () => {
    if (index === 0) return setIndex(items.length - 1);
    setIndex(index - 1);
  };

  const next = () => {
    if (index === items.length - 1) return setIndex(0);
    setIndex(index + 1);
  };

  return [items[index], prev, next];
};

export default useIterator;
