import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';

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

  public get(url: string, appendUserId: boolean = true): Observable<any> {
    return this.sendToBackend(url, '', appendUserId, (completeUrl, observer) => {
      this.httpClient.get(completeUrl, this.httpOptions).subscribe(observer);
    });
  }

  public post(url: string, data: any, queryParams: string = '', appendUserId: boolean = true): Observable<any> {
    return this.sendToBackend(url, queryParams, appendUserId, (completeUrl, observer) => {
      this.httpClient.post(completeUrl, data, this.httpOptions).subscribe(observer);
    });
  }

  private sendToBackend(url: string, queryParams: string, appendUserId: boolean, callback: (completeUrl: string, observer) => any): Observable<any> {
    const userId = this.storageService.getUserId();

    return new Observable<any>((observer) => {
      this.configService.getConfiguration().subscribe((config) => {
        let completeUrl = `${config.backendUrl}${url}`;

        if (appendUserId) {
          completeUrl = `${completeUrl}/${userId}`;
        }

        completeUrl = `${completeUrl}${queryParams}`;
        callback(completeUrl, observer);
      });
    });
  }
}
