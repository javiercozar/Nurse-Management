import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurse-management-page',
  templateUrl: './nurse-management-page.component.html',
  styleUrls: ['./nurse-management-page.component.scss']
})
export class NurseManagementPageComponent implements OnInit {

  datePickerTitle = 'Choose work shift date';
  dateInitialValue = new Date().toUTCString();
  dateSelected: Date;
  searchText: string;

  constructor() { }

  ngOnInit(): void {
  }

  OnDateChangeValue(dateSelected: Date): void {
    this.dateSelected = dateSelected;
  }

  OnSearchTextChanged(search: string): void {
    this.searchText = search;
  }
}
