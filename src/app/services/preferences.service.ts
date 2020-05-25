import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PreferenceDTO} from '../dto/preference.dto';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private readonly url = 'http://localhost:8080/???';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public httpClient: HttpClient) {}
  public enroll(preferanceDTO: PreferenceDTO): Observable<any>{
    return this.httpClient.post<any>(this.url, preferanceDTO, this.httpOptions);
  }
}
