import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
