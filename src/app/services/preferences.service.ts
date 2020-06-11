import {Injectable} from '@angular/core';
import {PreferenceDTO} from '../dto/preference.dto';
import {NetworkService} from './network.service';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private readonly url = '/user/autoSync';

  constructor(
    private networkService: NetworkService,
    private messageService: MessageService
  ) {}

  public getPreferences(observer: (any) => void): void {
    this.networkService.get(this.url)
      .subscribe(observer, (error) => {
        this.messageService.add(error);
      });
  }

  public enroll(preferenceDTO: PreferenceDTO, observer: (any) => void): void {
    this.networkService.post(this.url, {}, `?autoSync=${preferenceDTO.autoSynchronisation}`)
      .subscribe(observer, (error) => {
        this.messageService.add(error);
      });
  }
}
