import { TestBed } from '@angular/core/testing';

import { NonResidentService } from './non-resident.service';

describe('NonResidentService', () => {
  let service: NonResidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonResidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
