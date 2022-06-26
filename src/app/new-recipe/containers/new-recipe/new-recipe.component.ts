import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/shared/services/get-data.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewRecipeComponent implements OnInit {
  constructor(private getDataService: GetDataService) {
    // this.getDataService.addRecipe({
    //   name: 'Befsztyk',
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
  }

  ngOnInit(): void {}
}
