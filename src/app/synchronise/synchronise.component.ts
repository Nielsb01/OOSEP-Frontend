import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {SynchroniseDTO} from '../dto/synchronise.dto';
import {dateValidator} from '../validator/date.validator';
import {SynchronisationService} from '../services/synchronisation.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {JiraUserkeyService} from '../services/jira-userkey.service';
import {GetUserkeysDto} from '../dto/get-userkeys.dto';

@Component({
  selector: 'app-synchronise',
  templateUrl: './synchronise.component.html',
  styleUrls: ['./synchronise.component.css']
})
export class SynchroniseComponent implements OnInit{

  public synchronisationForm: FormGroup;
  userKeys: GetUserkeysDto = {
    hasJiraUserKeys: false
  };

  public synchronised: boolean;
  public worklogsFailed: boolean;

  public synchronisedWorklogs: number;
  public synchronisedHours: number;
  public failedWorklogs : number;
  public failedHours: number;

  constructor(
    private synchronisationService: SynchronisationService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private userkeyService: JiraUserkeyService
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

    this.synchronisationService.handleSynchronisation(synchronisationData, (synchronisationData) => {
      this.spinner.hide();
      this.showSynchronisationResults(synchronisationData);
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

  ngOnInit(): void {
    this.userkeyService.getAvalableJiraKeys((availableUserKeys: GetUserkeysDto) => {
      this.userKeys = availableUserKeys;
    });
  }
}
