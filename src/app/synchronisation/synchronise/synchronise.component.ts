import { Component } from '@angular/core';

import { SynchronisationService } from "../synchronisation.service";

@Component({
  selector: 'app-synchronise',
  templateUrl: './synchronise.component.html',
  styleUrls: ['./synchronise.component.css']
})
export class SynchroniseComponent {

  tempData = {
    'data': 'geen'
  };

  constructor(private synchronisationService: SynchronisationService) {  }

  synchroniseWorkedTime(): void {
    this.synchronisationService.synchroniseWorkedTime(this.tempData);
  }
}
