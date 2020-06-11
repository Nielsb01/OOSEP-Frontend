import { Injectable } from '@angular/core';
import {NetworkService} from './network.service';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class JiraUserkeyService {
  private readonly url = '/user/hasUserKeys';

  constructor(
    private networkService: NetworkService,
    private messageService: MessageService
  ) {}

  public getAvalableJiraKeys(observer: (any) => void): void {
    this.networkService.get(this.url)
      .subscribe(observer, (error) => {
        this.messageService.add(error);
      });
  }
}
