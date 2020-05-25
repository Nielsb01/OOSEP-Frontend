import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDTO } from '../dto/login.dto';
import { Observable } from 'rxjs';
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private readonly url = 'http://localhost:8080/login';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  };

  constructor(
    public httpClient: HttpClient
  ) {}
  public enroll(logindata: LoginDTO): Observable<any> {
    return this.httpClient.post<any>(this.url, logindata, this.httpOptions);
  }
}
