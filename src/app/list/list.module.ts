import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfRecipesComponent } from './components/list-of-recipes/list-of-recipes.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [ListOfRecipesComponent, DeleteDialogComponent],
  imports: [CommonModule, SharedModule, MatListModule],
  exports: [ListOfRecipesComponent],
})
export class ListModule {}
