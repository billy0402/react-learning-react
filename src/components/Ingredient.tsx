import React from 'react';

import { Ingredient as IngredientType } from '../models/recipe';

type IngredientProp = IngredientType;

const Ingredient = ({ amount, measurement, name }: IngredientProp) => {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
};

export default Ingredient;
