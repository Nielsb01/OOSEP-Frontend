import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { SynchronisationData } from "../synchronisation/synchronisationData";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Moet globaal worden
  backendUrl = '000.000.000.000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  handleLogin(synchronisationData: SynchronisationData) {
    this.http.post(this.backendUrl, synchronisationData, this.httpOptions);
  }
}
