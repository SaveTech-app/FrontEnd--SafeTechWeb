import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianProfileComponent } from './technician-profile.component';

describe('TechnicianProfileComponent', () => {
  let component: TechnicianProfileComponent;
  let fixture: ComponentFixture<TechnicianProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
