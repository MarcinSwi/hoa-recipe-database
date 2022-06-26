import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';
import { Recipe } from '../../model/recipe.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  data: Promise<Recipe>;

  constructor(
    private getDataService: GetDataService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog
  ) {
    const recipeId = this.activatedRoute.snapshot.params['recipeId'];

    this.data = this.getDataService.getRecipe(recipeId);
  }

  openDeleteDialog(id: string) {
    this.matDialog.open(DeleteDialogComponent, { data: { id } });
  }

  ngOnInit(): void {}
}
