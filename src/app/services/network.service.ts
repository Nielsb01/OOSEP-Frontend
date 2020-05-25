import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  };

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
    private configService: ConfigService
  ) { }

  public get(url: string): Observable<any> {
    return this.sendToBackend(url, (completeUrl, observer) => {
      this.httpClient.get(completeUrl, this.httpOptions).subscribe(observer);
    });
  }

  public post(url: string, data: any): Observable<any> {
    return this.sendToBackend(url, (completeUrl, observer) => {
      this.httpClient.post(completeUrl, data, this.httpOptions).subscribe(observer);
    });
  }

  private sendToBackend(url: string, callback: (completeUrl: string, observer) => any): Observable<any> {
    let userId = this.storageService.getUserId();

    return new Observable<any>((observer) => {
      this.configService.getConfiguration().subscribe((config) => {
        console.log(config.backendUrl);
        let completeUrl = `${config.backendUrl}${url}/${userId}`;

        console.log(completeUrl);

        callback(completeUrl, observer);
      });
    });
  }
}
