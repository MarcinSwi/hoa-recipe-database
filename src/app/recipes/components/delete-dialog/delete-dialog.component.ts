import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/shared/services/get-data.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private getDataService: GetDataService,
    private router: Router,
    public dialogRef: MatDialogRef<DeleteDialogComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  deleteRecipe() {
    const response = this.getDataService.removeRecipe(this.data.id);
    this.router.navigate(['./']);
  }

  ngOnInit(): void {}
}
