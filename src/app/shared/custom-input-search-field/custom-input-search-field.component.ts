import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input-search-field',
  templateUrl: './custom-input-search-field.component.html',
  styleUrls: ['./custom-input-search-field.component.scss']
})
export class CustomInputSearchFieldComponent implements OnInit {

  @Output() OnTextXhanged = new EventEmitter<string>();
  nurseName: string;

  constructor() { }

  ngOnInit(): void {
  }

  OnDataChange(event: string): void {
    this.OnTextXhanged.emit(this.nurseName);
  }
}
