import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { RecipeForm } from 'src/app/shared/forms/recipe.form';
import { GetDataService } from 'src/app/shared/services/get-data.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeFormComponent implements OnInit {
  @Input() form!: RecipeForm;
  @Input() recipeId?: string;

  constructor(private getDataService: GetDataService) {
    this.form;
  }

  save() {
    if (this.recipeId && this.form.valid) {
      this.getDataService.editRecipe({
        _id: this.recipeId,
        name: this.form.name.value,
        preparationTimeInMinutes: this.form.preparationTimeInMinutes.value,
        description: this.form.description.value,
        ingredients: this.form.getIngredientsToSave(),
      });
    } else if (this.form.valid) {
      this.getDataService.addRecipe({
        name: this.form.name.value,
        preparationTimeInMinutes: this.form.preparationTimeInMinutes.value,
        description: this.form.description.value,
        ingredients: this.form.getIngredientsToSave(),
      });
    }
  }

  addIngredient() {
    this.form.addIngredient();
  }

  deleteIngredient(ingredientIndex: number) {
    this.form.deleteIngredient(ingredientIndex);
  }

  ngOnInit(): void {}
}
