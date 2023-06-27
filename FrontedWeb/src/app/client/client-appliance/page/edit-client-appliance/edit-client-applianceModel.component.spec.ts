import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { EditClientApplianceModelComponent } from './edit-client-applianceModel.component';

describe('EditClientProfileComponent', () => {
  let component: EditClientApplianceModelComponent;
  let fixture: ComponentFixture<EditClientApplianceModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientApplianceModelComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientApplianceModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
