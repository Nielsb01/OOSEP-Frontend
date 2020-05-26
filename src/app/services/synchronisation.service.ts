import {Injectable} from '@angular/core';
import {SynchroniseDTO} from '../dto/synchronise.dto';
import {NetworkService} from './network.service';

@Injectable({
  providedIn: 'root'
})
export class SynchronisationService {

  private readonly url = '/synchronise';

  constructor(
    private networkService: NetworkService
  ) { }

  public handleSynchronisation(synchronisationData: SynchroniseDTO) {
    return this.networkService.post(this.url, synchronisationData);
  }
}
