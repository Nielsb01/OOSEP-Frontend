import { TestBed } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';

describe('PreferancesService', () => {
  let service: PreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferencesService);
  });
});
