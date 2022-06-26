import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PreparationTimePipe } from './pipes/preparation-time.pipe';

@NgModule({
  declarations: [
    PreparationTimePipe
  ],
  imports: [CommonModule],
  exports: [MatButtonModule, MatDialogModule, MatIconModule, PreparationTimePipe],
})
export class SharedModule {}
