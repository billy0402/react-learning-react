import React from 'react';

import { Recipe } from '../models/recipe';

type InstructionsProp = Pick<Recipe, 'steps'> & {
  title: string;
};

const Instructions = ({ title, steps }: InstructionsProp) => {
  return (
    <section className='instructions'>
      <h2>{title}</h2>
      {steps.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </section>
  );
};

export default Instructions;
