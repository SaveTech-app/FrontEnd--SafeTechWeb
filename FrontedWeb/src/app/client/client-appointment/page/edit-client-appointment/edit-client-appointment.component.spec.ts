import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientAppointmentComponent } from './edit-client-appointment.component';

describe('EditClientAppointmentComponent', () => {
  let component: EditClientAppointmentComponent;
  let fixture: ComponentFixture<EditClientAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
