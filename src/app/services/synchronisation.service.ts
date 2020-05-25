import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {SynchroniseDTO} from "../synchronise.dto";

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

  public handleSynchronisation(synchronisationData: SynchroniseDTO) {
    this.http.post(this.backendUrl, synchronisationData, this.httpOptions);
  }
}
