import {async, TestBed} from '@angular/core/testing';

import { EnrollmentService } from './enrollment.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginDTO} from '../dto/login.dto';
import {Observable} from 'rxjs';



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

  it('should call post func when enroll is called', () => {
    const mockSpy = spyOn(service.httpClient, 'post').and.returnValue(new Observable());
    const credentials: LoginDTO = {
      username: 'ttt',
      password: 'ttt'
    };
    service.enroll(credentials);
    expect(mockSpy).toHaveBeenCalled();
  });
});
