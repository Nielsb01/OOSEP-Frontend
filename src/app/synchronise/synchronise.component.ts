import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {SynchroniseDTO} from '../dto/synchronise.dto';
import {dateValidator} from '../validator/date.validator';
import {SynchronisationService} from '../services/synchronisation.service';

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

  public onSubmit(formData: {fromDate: string, untilDate: string}): void {
    const synchronisationData: SynchroniseDTO = {
      fromDate: this.convertDate(formData.fromDate),
      untilDate: this.convertDate(formData.untilDate)
    };

    this.synchronisationService.handleSynchronisation(synchronisationData).subscribe((data) => {
      console.warn('Synchronisation attempt made: ', synchronisationData);
    }, (error) => console.error(error));
  }

  private convertDate(date: string): string {
    let dateParts = date.split('-');
    const day = Number(dateParts[0]);
    const month = Number(dateParts[1]);
    const year = Number(dateParts[2]);

    return `${year}-${month}-${day}`;
  }
}
