import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Add, Update } from 'src/app/model/constants';
import { DataTableSource } from '../dataTableSource';

@Component({
  selector: 'app-nurse-table-dialog',
  templateUrl: './nurse-table-dialog.component.html',
  styleUrls: ['./nurse-table-dialog.component.scss']
})
export class NurseTableDialogComponent implements OnInit {
  action: string;
  localData: any;
  showAllFieds: boolean;
  shiftDateLabel = 'Shift Date';

  constructor(public dialogRef: MatDialogRef<NurseTableDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: DataTableSource) { }

  ngOnInit(): void {
    this.localData = {...this.data};
    this.action = this.localData.action;
    this.showAllFieds = this.action === Update || this.action === Add;
  }

  doAction(): void {
    this.dialogRef.close({
      event: this.action,
      data: this.localData
    });
  }

  closeDialog(): void {
    this.dialogRef.close({event: 'Cancel'});
  }

  OnDateChangeValue(date: Date): void {
    this.localData.date = date;
  }

}
