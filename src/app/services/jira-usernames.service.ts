import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsernamesDto} from "../dto/usernames.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JiraUsernamesService {
  private readonly url = 'http://localhost:8080/???';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public httpClient: HttpClient) { }

  public getJiraUsernames(usernames: UsernamesDto): Observable<any> {
    return this.httpClient.post<any>(this.url, usernames, this.httpOptions);
  }
}
