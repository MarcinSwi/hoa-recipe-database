export interface Recipe {
  _id: string;
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: Array<{ name: string; quantity: string }>;
}
