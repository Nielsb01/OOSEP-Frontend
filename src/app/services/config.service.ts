import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly configFile = 'assets/config/config.json';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  public getConfiguration(observer: (any) => void): void {
    this.httpClient.get(this.configFile)
      .subscribe(observer, (error) => {
        this.messageService.add(error);
      });
  }
}
