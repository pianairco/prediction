import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.css']
})
export class WarningDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<WarningDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: WarningData) { }

  ngOnInit(): void {

  }
}

export class WarningData {
  title: string;
  message: string;
}
