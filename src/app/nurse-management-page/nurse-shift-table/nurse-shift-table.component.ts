import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableSource } from './dataTableSource';
import { NurseTableDialogComponent } from './nurse-table-dialog/nurse-table-dialog.component';
import { WorkShiftDay } from './WorkShiftDay';

@Component({
  selector: 'app-nurse-shift-table',
  templateUrl: './nurse-shift-table.component.html',
  styleUrls: ['./nurse-shift-table.component.scss']
})

export class NurseShiftTableComponent implements OnInit, AfterViewInit {
  constructor(public dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'name', 'date', 'workShift', 'action'];
  dataSource = new MatTableDataSource<DataTableSource>(data);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sorter: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sorter;
  }

  ngOnInit(): void {
  }

  openDialog(action, element): void {
    element.action = action;
    console.log(element);

    const dialogRef = this.dialog.open(NurseTableDialogComponent, {
      width: '250px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      }
      else if (result.event === 'Update') {
        this.updateRowData(result.data);
      }
      else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(data: any): void {
    console.log('row added ');
  }
  updateRowData(data: any): void {
    console.log('row updated ');
  }
  deleteRowData(data: any): void {
    console.log('row deleted ');
  }

}

const data: DataTableSource[] = [
  {id: 1, name: 'javier cozar', date: '2020-10-22', workShift: WorkShiftDay.morning},
  {id: 2, name: 'veronica garcia', date: '2020-10-22', workShift: WorkShiftDay.morning},
  {id: 3, name: 'juan antonio campoy', date: '2020-10-23', workShift: WorkShiftDay.morning},
  {id: 4, name: 'pedro mendez', date: '2020-10-22', workShift: WorkShiftDay.afertoon},
  {id: 5, name: 'juanito mendez', date: '2020-10-22', workShift: WorkShiftDay.afertoon},
  {id: 6, name: 'alberto teleru', date: '2020-10-22', workShift: WorkShiftDay.afertoon},
];
