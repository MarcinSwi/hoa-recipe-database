import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
