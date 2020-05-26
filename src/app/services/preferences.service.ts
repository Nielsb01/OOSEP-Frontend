import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PreferenceDTO} from '../dto/preference.dto';
import {NetworkService} from './network.service';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private readonly url = '/user/autoSync';

  constructor(
    public networkService: NetworkService
  ) {}

  public enroll(preferenceDTO: PreferenceDTO): Observable<any> {
    return this.networkService.post(`${this.url}`, {}, `?autoSync=${preferenceDTO.autoSynchronisation}`);
  }
}
