import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginDTO} from './login.dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  url = 'http://localhost:8080/login';
  constructor(public httpClient: HttpClient) { }

  public enroll(logindata: LoginDTO): Observable<any>{
    return this.httpClient.post<any>(this.url, logindata, this.httpOptions);
  }
}
