import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output} from '@angular/core';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PickDateAdapter, PICK_FORMATS } from '../utils/date-utils';

@Component({
  selector: 'app-datepicker-custom-header',
  templateUrl: './datepicker-custom-header.component.html',
  styleUrls: ['./datepicker-custom-header.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  ]
})

export class DatepickerCustomHeaderComponent implements OnInit {

  @Input() label = '';
  @Input() startDateAt;
  dateModel: Date;

  @Output() OnChangeValue = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
  }

  onDateChange(event: any): void {
    this.OnChangeValue.emit(this.dateModel);
  }
}
