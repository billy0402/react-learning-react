type Recipe = {
  name: string;
  ingredients: Ingredient[];
  steps: string[];
};

type Ingredient = {
  name: string;
  amount: number;
  measurement: string;
};

export type { Recipe, Ingredient };
