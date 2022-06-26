import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfRecipesComponent } from './containers/list-of-recipes/list-of-recipes.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { DetailsComponent } from './containers/details/details.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { EditComponent } from './containers/edit/edit.component';
import { NewRecipeModule } from '../new-recipe/new-recipe.module';

@NgModule({
  declarations: [
    ListOfRecipesComponent,
    DeleteDialogComponent,
    DetailsComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    RecipesRoutingModule,
    NewRecipeModule,
  ],
  exports: [ListOfRecipesComponent],
})
export class RecipesModule {}
