import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';
import { Recipe } from '../../model/recipe.interface';

@Component({
  selector: 'app-list-of-recipes',
  templateUrl: './list-of-recipes.component.html',
  styleUrls: ['./list-of-recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOfRecipesComponent implements OnInit {
  data: Promise<Recipe[]>;

  constructor(
    private matDialog: MatDialog,
    private getDataService: GetDataService
  ) {
    this.data = this.getDataService.getAllRecipes();
  }

  openDeleteDialog(id: string) {
    this.matDialog.open(DeleteDialogComponent, { data: { id } });
  }

  ngOnInit(): void {}
}
