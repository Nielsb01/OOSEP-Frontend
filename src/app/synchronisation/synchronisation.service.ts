import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {SynchronisationModule} from "./synchronisation.module";
import {SynchronisationData} from "./synchronisationData";

@Injectable({
  providedIn: SynchronisationModule
})
export class SynchronisationService {

  backendUrl = '000.000.000.000';

  httpOptions = {
    headers: new HttpHeaders({
      observe: 'response',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  synchroniseWorkedTime(synchronisationData: SynchronisationData) {
    this.http.post(this.backendUrl, synchronisationData, this.httpOptions);
  }
}
