import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synchronisation-results',
  templateUrl: './synchronisation-results.component.html',
  styleUrls: ['./synchronisation-results.component.css']
})
export class SynchronisationResultsComponent implements OnInit {

  synchronised: boolean;
  worklogsFailed: boolean;

  totalSynchronisedSeconds

  synchronisedWorklogs: number;
  synchronisedHours: number;
  failedWorklogs : number;
  failedHours: number;

  constructor() {
    this.synchronised = false;
    this.worklogsFailed = false;
  }

  ngOnInit(): void {
  }

  show(synchronisedWorklogs: number, synchronisedHours: number, failedWorklogs: number, failedHours: number ) {
    this.synchronisedWorklogs = synchronisedWorklogs;
    this.synchronisedHours = synchronisedHours;
    this.failedWorklogs = failedWorklogs;
    this.failedHours = failedHours;

    this.synchronised = true;

    if (failedWorklogs > 0)  {
      this.worklogsFailed = true;
    }
  }
}
