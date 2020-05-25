import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {SynchroniseDTO} from "../synchronise.dto";
import {StorageService} from "./storage.service";

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

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  public handleSynchronisation(synchronisationData: SynchroniseDTO) {
    let url = `${this.backendUrl}/userId=${this.storageService.getUserId()}`;
    this.http.post(url, synchronisationData, this.httpOptions);
  }
}
