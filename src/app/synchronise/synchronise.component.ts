import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {SynchronisationService} from "../services/synchronisation.service";

@Component({
  selector: 'app-synchronise',
  templateUrl: './synchronise.component.html',
  styleUrls: ['./synchronise.component.css']
})
export class SynchroniseComponent {

  public synchronisationForm: FormGroup;

  constructor(
    private synchronisationService: SynchronisationService,
    private formBuilder: FormBuilder,
  ) {
    this.synchronisationForm = this.formBuilder.group({
      syncOriginEmailAddress: ['', [Validators.required, Validators.email]],
      syncDestinationEmailAddress: ['', [Validators.required, Validators.email]],
    });
  }

  public onSubmit(synchronisationData) {
    this.synchronisationService.handleSynchronisation(synchronisationData);
    console.warn('Synchronisation attempt made: ', synchronisationData);
  }
}
