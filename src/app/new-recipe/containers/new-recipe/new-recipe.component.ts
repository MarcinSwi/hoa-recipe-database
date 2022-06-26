import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RecipeForm } from 'src/app/shared/forms/recipe.form';
import { GetDataService } from 'src/app/shared/services/get-data.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewRecipeComponent implements OnInit {
  form!: RecipeForm;

  constructor(private getDataService: GetDataService) {
    // this.getDataService.addRecipe({
    //   name: 'Coś tam',
    //   description: 'Utłuc mięsa, obtoczyć w jajku i bułce, smażyć.',
    //   preparationTimeInMinutes: 321,
    //   ingredients: [
    //     {
    //       name: 'Mięso',
    //       quantity: '200g',
    //     },
    //     { name: 'Bułka tarta', quantity: '50g' },
    //     { name: 'Jajka', quantity: '2 szt.' },
    //   ],
    // });

    this.form = new RecipeForm({
      name: '',
      preparationTimeInMinutes: 0,
      description: '',
      ingredients: [{ name: '', quantity: '' }],
    });
  }

  ngOnInit(): void {}
}
