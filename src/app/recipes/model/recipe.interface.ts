export interface Ingredients {
  name: string;
  quantity: string;
}

export interface Recipe {
  _id: string;
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: Ingredients[];
}

export interface NewRecipe {
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: Ingredients[];
}
