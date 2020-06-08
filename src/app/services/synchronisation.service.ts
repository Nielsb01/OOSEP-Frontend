import {Injectable} from '@angular/core';
import {SynchroniseDTO} from '../dto/synchronise.dto';
import {NetworkService} from './network.service';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class SynchronisationService {
  private readonly url = '/synchronise';

  constructor(
    private networkService: NetworkService,
    private messageService: MessageService
  ) { }

  public handleSynchronisation(synchronisationData: SynchroniseDTO, observer: (any) => void): void {
    this.networkService.post(this.url, synchronisationData)
      .subscribe(observer, (error) => {
        this.messageService.add(error);
      });
  }
}
