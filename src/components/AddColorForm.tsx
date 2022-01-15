import React, { FormEvent } from 'react';

import useColors from '../hooks/useColors';
import { useInput } from '../hooks/useInput';

const AddColorForm = () => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const { addColor } = useColors();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        type='text'
        {...titleProps}
        placeholder='color title...'
        required
      />
      <input type='color' {...colorProps} required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
