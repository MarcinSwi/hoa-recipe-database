import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PreparationTimePipe } from './pipes/preparation-time.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [PreparationTimePipe, SearchPipe],
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    PreparationTimePipe,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    SearchPipe,
    FormsModule,
    MatSnackBarModule,
  ],
})
export class SharedModule {}
