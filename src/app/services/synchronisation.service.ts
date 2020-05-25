import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SynchronisationService {

  backendUrl = '000.000.000.000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  handleSynchronisation(synchronisationData: { username: string, password: string }) {
    this.http.post(this.backendUrl, synchronisationData, this.httpOptions);
  }
}
