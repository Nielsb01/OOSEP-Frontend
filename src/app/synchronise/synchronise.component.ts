import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {SynchronisationService} from "../synchronisation.service";

@Component({
  selector: 'app-synchronise',
  templateUrl: './synchronise.component.html',
  styleUrls: ['./synchronise.component.css']
})
export class SynchroniseComponent {

  synchronisationForm;

  constructor(
    private synchronisationService: SynchronisationService,
    private formBuilder: FormBuilder,
  ) {
    this.synchronisationForm = this.formBuilder.group({
      syncFromURL: '',
      syncFromUsername: '',
      syncFromPassword: '',

      syncToURL: '',
      syncToUsername: '',
      syncToPassword: ''
    });
  }

  onSubmit(synchronisationData) {
    this.synchronisationService.handleSynchronisation(synchronisationData);

    console.warn('Synchronisation attempt made: ', synchronisationData);
  }
}
