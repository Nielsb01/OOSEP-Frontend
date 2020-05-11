import { TestBed } from '@angular/core/testing';

import { SynchronisationService } from './synchronisation.service';
import {HttpClientModule} from "@angular/common/http";

describe('SynchronisationServiceService', () => {
  let service: SynchronisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SynchronisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
