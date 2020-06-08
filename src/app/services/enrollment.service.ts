import {Injectable} from '@angular/core';
import {LoginDTO} from '../dto/login.dto';
import {Observable} from 'rxjs';
import {NetworkService} from './network.service';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private readonly url = '/login';

  constructor(
    private networkService: NetworkService,
    private messageService: MessageService
  ) {}

  public enroll(loginData: LoginDTO, observer: (any) => void): void {
    this.networkService.post(this.url, loginData, '', false)
      .subscribe(observer, (error) => {
        this.messageService.add(error);
      });
  }
}
