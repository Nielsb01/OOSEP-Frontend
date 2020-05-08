import { TestBed } from '@angular/core/testing';

import { SynchronisationService } from './synchronisation.service';

describe('SynchronisationServiceService', () => {
  let service: SynchronisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SynchronisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
