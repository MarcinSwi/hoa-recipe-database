import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeForm } from 'src/app/shared/forms/recipe.form';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { Recipe } from '../../model/recipe.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  data: Promise<Recipe>;
  form!: RecipeForm;
  recipeId: string;

  constructor(
    private getDataService: GetDataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.recipeId = this.activatedRoute.snapshot.params['recipeId'];
    this.data = this.getDataService.getRecipe(this.recipeId);
    this.data.then((data) => (this.form = new RecipeForm(data)));
  }

  save() {}

  ngOnInit(): void {}
}
