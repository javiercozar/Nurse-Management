import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {FormsModule} from '@angular/forms';

import { NurseManagementPageComponent } from './nurse-management-page/nurse-management-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { DatepickerCustomHeaderComponent } from './shared/datepicker-custom-header/datepicker-custom-header.component';
import { CustomInputSearchFieldComponent } from './shared/custom-input-search-field/custom-input-search-field.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NurseShiftTableComponent } from './nurse-management-page/nurse-shift-table/nurse-shift-table.component';
import { NurseTableDialogComponent } from './nurse-management-page/nurse-shift-table/nurse-table-dialog/nurse-table-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NurseManagementPageComponent,
    CalendarPageComponent,
    HomePageComponent,
    FooterPageComponent,
    DatepickerCustomHeaderComponent,
    CustomInputSearchFieldComponent,
    NurseShiftTableComponent,
    NurseTableDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
