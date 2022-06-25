import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list-of-recipes',
  templateUrl: './list-of-recipes.component.html',
  styleUrls: ['./list-of-recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOfRecipesComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  openDeleteDialog() {
    this.matDialog.open(DeleteDialogComponent);
  }

  ngOnInit(): void {}
}
