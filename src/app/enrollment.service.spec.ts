import {async, TestBed} from '@angular/core/testing';

import { EnrollmentService } from './enrollment.service';
import {HttpClientModule} from '@angular/common/http';
import any = jasmine.any;
import {LoginDTO} from './login.dto';



describe('EnrollmentService', () => {
  let service: EnrollmentService;


  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
        HttpClientModule
      ],
    }).compileComponents();
    service = TestBed.inject(EnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
