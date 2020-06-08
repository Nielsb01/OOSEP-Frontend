import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {SynchroniseDTO} from '../dto/synchronise.dto';
import {dateValidator} from '../validator/date.validator';
import {SynchronisationService} from '../services/synchronisation.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {SynchronisationResultsComponent} from "./synchronisation-results/synchronisation-results.component";

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
    private spinner: NgxSpinnerService,
    private synchronisationResultsComponent: SynchronisationResultsComponent
  ) {
    this.synchronisationForm = this.formBuilder.group({
      fromDate: ['', [Validators.required, dateValidator]],
      untilDate: ['', [Validators.required, dateValidator]]
    });
  }

  public onSubmit(formData: {fromDate: string, untilDate: string}): void {
    this.spinner.show();

    const synchronisationData: SynchroniseDTO = {
      fromDate: this.convertDate(formData.fromDate),
      untilDate: this.convertDate(formData.untilDate)
    };

    this.synchronisationService.handleSynchronisation(synchronisationData).subscribe((synchronisationData) => {
      this.spinner.hide();
      this.showSynchronisationResults(synchronisationData)
    }, (error) => {
      this.spinner.hide();
      console.error(error);
    });
  }

  private showSynchronisationResults(synchronisationData) {
    let synchronisedWorklogs = synchronisationData.totalSynchronisedWorklogs;
    let synchronisedHours = this.secondsToHours(synchronisationData.totalSynchronisedSeconds);

    let failedWorklogs = synchronisationData.totalFailedSynchronisedWorklogs;
    let failedHours = this.secondsToHours(synchronisationData.totalFailedSynchronisedSeconds);

    this.synchronisationResultsComponent.show(synchronisedWorklogs, synchronisedHours, failedWorklogs, failedHours);
  }

  private secondsToHours(seconds: number): number {
    return seconds / 60 / 60;
  }

  private convertDate(date: string): string {
    let dateParts = date.split('-');
    const day = Number(dateParts[0]);
    const month = Number(dateParts[1]);
    const year = Number(dateParts[2]);

    return `${year}-${month}-${day}`;
  }
}
