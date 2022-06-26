import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredients, NewRecipe } from 'src/app/recipes/model/recipe.interface';
import { IngredientsForm } from './ingredients.form';

export class RecipeForm extends FormGroup {
  constructor(recipe: NewRecipe) {
    let ingredients = recipe.ingredients.map(
      (item) =>
        new IngredientsForm({ name: item.name, quantity: item.quantity })
    );

    if (ingredients.length < 2) {
      ingredients = [
        new IngredientsForm({ name: '', quantity: '' }),
        new IngredientsForm({ name: '', quantity: '' }),
      ];
    }

    super({
      name: new FormControl(recipe.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
      ]),
      preparationTimeInMinutes: new FormControl(
        recipe.preparationTimeInMinutes,
        [Validators.required]
      ),
      description: new FormControl(recipe.description, [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(255),
      ]),
      ingredients: new FormArray(ingredients, [Validators.required]),
    });
  }

  get name() {
    return this.get('name') as FormControl;
  }

  get preparationTimeInMinutes() {
    return this.get('preparationTimeInMinutes') as FormControl;
  }

  get description() {
    return this.get('description') as FormControl;
  }

  get ingredients() {
    return this.get('ingredients') as FormArray;
  }

  get ingredientsControls() {
    return this.ingredients.controls as IngredientsForm[];
  }

  addIngredient() {
    const add = new IngredientsForm({ name: '', quantity: '' });
    this.ingredientsControls.push(add);
  }

  deleteIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  getIngredientsToSave() {
    const toSaveObj: Ingredients[] = [];

    this.ingredientsControls.forEach((item) => {
      toSaveObj.push({
        name: item.name.value,
        quantity: item.quantity.value,
      });
    });

    return toSaveObj;
  }
}
