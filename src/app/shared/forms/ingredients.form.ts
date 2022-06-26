import { FormControl, FormGroup } from '@angular/forms';
import { Ingredients } from 'src/app/recipes/model/recipe.interface';

export class IngredientsForm extends FormGroup {
  constructor(ingredients: Ingredients) {
    super({
      name: new FormControl(ingredients.name),
      quantity: new FormControl(ingredients.quantity),
    });
  }

  get name() {
    return this.get('name') as FormControl;
  }

  get quantity() {
    return this.get('quantity') as FormControl;
  }
}
