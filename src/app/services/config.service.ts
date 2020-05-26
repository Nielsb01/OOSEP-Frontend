import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly configFile = 'assets/config/config.json';

  constructor(private httpClient: HttpClient) { }

  public getConfiguration(): Observable<any> {
    return this.httpClient.get(this.configFile);
  }
}
