import React, { useState } from 'react';

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target?.value),
    },
    () => setValue(initialValue),
  ] as const;
};

export { useInput };
