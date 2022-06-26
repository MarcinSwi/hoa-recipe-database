import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecipeComponent } from './containers/new-recipe/new-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: NewRecipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRecipeRoutingModule {}
