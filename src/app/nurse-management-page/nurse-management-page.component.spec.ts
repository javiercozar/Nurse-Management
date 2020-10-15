import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseManagementPageComponent } from './nurse-management-page.component';

describe('NurseManagementPageComponent', () => {
  let component: NurseManagementPageComponent;
  let fixture: ComponentFixture<NurseManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseManagementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
