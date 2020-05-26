import {Injectable} from '@angular/core';
import {LoginDTO} from '../dto/login.dto';
import {Observable} from 'rxjs';
import {NetworkService} from './network.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private readonly url = '/login';

  constructor(
    private networkService: NetworkService
  ) {}

  public enroll(loginData: LoginDTO): Observable<any> {
    return this.networkService.post(this.url, loginData, false);
  }
}
