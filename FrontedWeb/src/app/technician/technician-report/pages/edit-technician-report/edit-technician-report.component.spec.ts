import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTechnicianReportComponent } from './edit-technician-report.component';

describe('EditTechnicianReportComponent', () => {
  let component: EditTechnicianReportComponent;
  let fixture: ComponentFixture<EditTechnicianReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTechnicianReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTechnicianReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
