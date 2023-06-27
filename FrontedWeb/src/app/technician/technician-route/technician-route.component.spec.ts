import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianRouteComponent } from './technician-route.component';

describe('TechnicianRouteComponent', () => {
  let component: TechnicianRouteComponent;
  let fixture: ComponentFixture<TechnicianRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
