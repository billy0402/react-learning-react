import React, { FormEvent, useState } from 'react';

type AddColorFormProp = {
  onNewColor?: (title: string, color: string) => void;
};

const AddColorForm = ({ onNewColor = () => ({}) }: AddColorFormProp) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle('');
    setColor('#000000');
  };

  return (
    <form onSubmit={submit}>
      <input
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder='color title...'
        required
      />
      <input
        type='color'
        value={color}
        onChange={(event) => setColor(event.target.value)}
        required
      />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
