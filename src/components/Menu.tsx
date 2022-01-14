import React from 'react';

import Recipe from './Recipe';
import { Recipe as RecipeType } from '../models/recipe';

type MenuProp = {
  recipes: RecipeType[];
};

const Menu = ({ recipes }: MenuProp) => {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className='recipes'>
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
};

export default Menu;
