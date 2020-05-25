import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PreferenceDTO} from '../dto/preference.dto';
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private readonly backendUrl = 'http://localhost:8080/autoSync';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    public httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  public enroll(preferanceDTO: PreferenceDTO): Observable<any>{
    let url = `${this.backendUrl}/userId=${this.storageService.getUserId()}`;
    return this.httpClient.post<any>(url, preferanceDTO, this.httpOptions);
  }
}
