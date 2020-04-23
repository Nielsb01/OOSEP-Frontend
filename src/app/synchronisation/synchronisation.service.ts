import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { SynchronisationData } from "./synchronisationData";

@Injectable({
  // TODO
  // zou dit moeten zijn maar dan is eer circular dependency: providedIn: SynchronisationModule
  providedIn: 'root'

})
export class SynchronisationService {

  // Moet globaal worden
  backendUrl = '000.000.000.000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  synchroniseWorkedTime(synchronisationData: SynchronisationData) {
    this.http.post(this.backendUrl, synchronisationData, this.httpOptions);
  }
}
