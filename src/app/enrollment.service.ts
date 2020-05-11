import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  url = '';
  constructor(private httpClient: HttpClient) { }

  enroll(logindata){
    return this.httpClient.post<any>(this.url, logindata);
  }
}
