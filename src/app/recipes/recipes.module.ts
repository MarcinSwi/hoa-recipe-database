import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfRecipesComponent } from './containers/list-of-recipes/list-of-recipes.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { DetailsComponent } from './containers/details/details.component';
import { ListRoutingModule } from './recipes-routing.module';
import { EditComponent } from './containers/edit/edit.component';
import { MatCardModule } from '@angular/material/card';

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
    ListRoutingModule,
    MatCardModule,
  ],
  exports: [ListOfRecipesComponent],
})
export class RecipesModule {}
