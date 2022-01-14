import React from 'react';

import Ingredient from './Ingredient';
import { Recipe } from '../models/recipe';

type IngredientListProp = Pick<Recipe, 'ingredients'>;

const IngredientList = ({ ingredients }: IngredientListProp) => {
  return (
    <ul className='ingredients'>
      {ingredients.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
};

export default IngredientList;
