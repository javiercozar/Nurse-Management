import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NurseManagementPageComponent } from './nurse-management-page/nurse-management-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'nurse-management', component: NurseManagementPageComponent},
  {path: 'calendar', component: CalendarPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
