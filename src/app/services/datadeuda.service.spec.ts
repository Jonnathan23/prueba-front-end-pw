import { TestBed } from '@angular/core/testing';

import { DatadeudaService } from './datadeuda.service';

describe('DatadeudaService', () => {
  let service: DatadeudaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatadeudaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
