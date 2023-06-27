import { TestBed } from '@angular/core/testing';
import {AppliancesModelService} from "./appliancesmodel.service";



describe('AppliancesModelService', () => {
  let service: AppliancesModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppliancesModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
