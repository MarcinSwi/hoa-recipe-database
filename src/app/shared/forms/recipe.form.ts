import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NewRecipe } from 'src/app/recipes/model/recipe.interface';

export class RecipeForm extends FormGroup {
  constructor(recipe: NewRecipe) {
    super({
      name: new FormControl(recipe.name),
      preparationTimeInMinutes: new FormControl(
        recipe.preparationTimeInMinutes
      ),
      description: new FormControl(recipe.description),
      ingredients: new FormArray([]),
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
}
