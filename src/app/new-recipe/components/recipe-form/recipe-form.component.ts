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

  constructor(private getDataService: GetDataService) {}

  save() {
    if (this.recipeId) {
      // this.getDataService.editRecipe()
    } else {
      // this.getDataService.addRecipe()
    }
  }

  ngOnInit(): void {}
}
