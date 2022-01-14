import React, { FormEvent } from 'react';

import { useInput } from '../hooks/useInput';

type AddColorFormProp = {
  onNewColor?: (title: string, color: string) => void;
};

const AddColorForm = ({ onNewColor = () => ({}) }: AddColorFormProp) => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
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
