import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientApplianceModelComponent } from './client-applianceModel.component';

describe('ClientApplianceComponent', () => {
  let component: ClientApplianceModelComponent;
  let fixture: ComponentFixture<ClientApplianceModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientApplianceModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientApplianceModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
