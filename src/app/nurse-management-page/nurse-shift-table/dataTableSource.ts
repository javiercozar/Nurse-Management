import { WorkShiftDay } from './WorkShiftDay';

export interface DataTableSource {
  id: number;
  name: string;
  date: string;
  workShift: WorkShiftDay;
}
