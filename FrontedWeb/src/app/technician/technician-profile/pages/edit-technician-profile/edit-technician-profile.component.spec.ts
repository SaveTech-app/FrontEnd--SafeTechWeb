import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTechnicianProfileComponent } from './edit-technician-profile.component';

describe('EditTechnicianProfileComponent', () => {
  let component: EditTechnicianProfileComponent;
  let fixture: ComponentFixture<EditTechnicianProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTechnicianProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTechnicianProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
