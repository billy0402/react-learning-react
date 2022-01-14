import React from 'react';

import IngredientList from './IngredientList';
import Instructions from './Instructions';
import { Recipe as RecipeType } from '../models/recipe';

type RecipeProp = RecipeType;

const Recipe = ({ name, ingredients, steps }: RecipeProp) => {
  return (
    <section id={name.toLowerCase().replace(/ /g, '-')}>
      <h1>{name}</h1>
      <IngredientList ingredients={ingredients} />
      <Instructions title='Cooking Instructions' steps={steps} />
    </section>
  );
};

export default Recipe;
