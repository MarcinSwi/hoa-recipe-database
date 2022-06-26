import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRecipeComponent } from './containers/new-recipe/new-recipe.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { SharedModule } from '../shared/shared.module';
import { NewRecipeRoutingModule } from './new-recipe-routing.module';

@NgModule({
  declarations: [NewRecipeComponent, RecipeFormComponent],
  imports: [CommonModule, SharedModule, NewRecipeRoutingModule],
  exports: [RecipeFormComponent],
})
export class NewRecipeModule {}
