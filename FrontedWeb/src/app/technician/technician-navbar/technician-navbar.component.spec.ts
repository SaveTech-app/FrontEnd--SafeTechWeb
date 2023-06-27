import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianNavbarComponent } from './technician-navbar.component';

describe('TechnicianNavbarComponent', () => {
  let component: TechnicianNavbarComponent;
  let fixture: ComponentFixture<TechnicianNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
