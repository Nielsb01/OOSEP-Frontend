import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {SynchroniseDTO} from '../dto/synchronise.dto';
import {dateValidator} from '../validator/date.validator';
import {SynchronisationService} from '../services/synchronisation.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-synchronise',
  templateUrl: './synchronise.component.html',
  styleUrls: ['./synchronise.component.css']
})
export class SynchroniseComponent {

  public synchronisationForm: FormGroup;

  synchronised: boolean;
  worklogsFailed: boolean;

  synchronisedWorklogs: number;
  synchronisedHours: number;
  failedWorklogs : number;
  failedHours: number;

  constructor(
    private synchronisationService: SynchronisationService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
  ) {
    this.synchronisationForm = this.formBuilder.group({
      fromDate: ['', [Validators.required, dateValidator]],
      untilDate: ['', [Validators.required, dateValidator]]
    });

    this.synchronised = false;
    this.worklogsFailed = false;
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
    this.synchronisedWorklogs = synchronisationData.totalSynchronisedWorklogs;
    this.synchronisedHours = this.secondsToHours(synchronisationData.totalSynchronisedSeconds);

    this.failedWorklogs = synchronisationData.totalFailedSynchronisedWorklogs;
    this.failedHours = this.secondsToHours(synchronisationData.totalFailedSynchronisedSeconds);

    this.synchronised = true;

    if (this.failedWorklogs > 0)  {
      this.worklogsFailed = true;
    }
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
