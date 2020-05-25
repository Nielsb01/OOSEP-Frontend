import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsernamesDto} from "../dto/usernames.dto";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class JiraUsernamesService {
  private readonly backendUrl = 'http://localhost:8080/jiraUserKey';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) { }

  public getJiraUsernames(usernames: UsernamesDto): Observable<any> {
    let url = `${this.backendUrl}/userId=${this.storageService.getUserId()}`;
    return this.httpClient.post<any>(url, usernames, this.httpOptions);
  }
}
