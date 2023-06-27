import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianReportComponent } from './technician-report.component';

describe('TechnicianReportComponent', () => {
  let component: TechnicianReportComponent;
  let fixture: ComponentFixture<TechnicianReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
