import {Injectable} from '@angular/core';
import {UsernamesDto} from '../dto/usernames.dto';
import {Observable} from 'rxjs';
import {NetworkService} from './network.service';

@Injectable({
  providedIn: 'root'
})
export class JiraUsernamesService {
  private readonly url = '/user/jiraUserKey';

  constructor(
    private networkService: NetworkService
  ) { }

  public getJiraUsernames(usernames: UsernamesDto): Observable<any> {
    return this.networkService.post(this.url, usernames);
  }
}
