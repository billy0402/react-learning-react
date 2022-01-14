import React, { FormEvent, useRef } from 'react';

type AddColorFormProp = {
  onNewColor?: (title: string, color: string) => void;
};

const AddColorForm = ({ onNewColor = () => ({}) }: AddColorFormProp) => {
  const txtTitle = useRef<HTMLInputElement>(null);
  const hexColor = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const title = txtTitle?.current?.value || '';
    const color = hexColor?.current?.value || '#000000';
    onNewColor(title, color);
    txtTitle.current && (txtTitle.current.value = '');
    hexColor.current && (hexColor.current.value = '#000000');
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type='text' placeholder='color title...' required />
      <input ref={hexColor} type='color' required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
