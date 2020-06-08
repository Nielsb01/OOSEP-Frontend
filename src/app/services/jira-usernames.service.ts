import {Injectable} from '@angular/core';
import {UsernamesDto} from '../dto/usernames.dto';
import {Observable} from 'rxjs';
import {NetworkService} from './network.service';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class JiraUsernamesService {
  private readonly url = '/user/jiraUserKey';

  constructor(
    private networkService: NetworkService,
    private messageService: MessageService
  ) { }

  public getJiraUsernames(usernames: UsernamesDto, observer: (any) => void): void {
    this.networkService.post(this.url, usernames)
      .subscribe(observer, (error) => {
        this.messageService.add(error);
      });
  }
}
