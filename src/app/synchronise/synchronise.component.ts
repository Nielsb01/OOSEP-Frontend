import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {SynchroniseDTO} from "../synchronise.dto";
import {dateValidator} from "../validator/date.validator";
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
      fromDate: ['', [Validators.required, dateValidator]],
      untilDate: ['', [Validators.required, dateValidator]]
    });
  }

  public onSubmit(synchronisationData: SynchroniseDTO): void {
    this.synchronisationService.handleSynchronisation(synchronisationData);
    console.warn('Synchronisation attempt made: ', synchronisationData);
  }
}
