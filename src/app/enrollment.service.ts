import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDTO } from './login.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  backendLoginEndpoint = 'http://localhost:8080/login';
  constructor(public httpClient: HttpClient) { }

  /**
   * Method will call the post method of the {@link HttpClient}.
   * @param loginData is a {@link LoginDTO} consisting of a username and password
   * @param httpOptions is the header needed for a succsessfull post request.
   */
  public enroll(loginData: LoginDTO): Observable<any>{
    return this.httpClient.post<any>(this.backendLoginEndpoint, loginData, this.httpOptions);
  }
}
