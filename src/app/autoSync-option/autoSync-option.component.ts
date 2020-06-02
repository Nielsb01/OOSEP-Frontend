import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PreferenceDTO} from '../dto/preference.dto';
import {PreferencesService} from '../services/preferences.service';
import {GetPreferenceDto} from '../dto/get-preference.dto';

@Component({
  selector: 'app-auto-sync',
  templateUrl: './autoSync-option.component.html',
  styleUrls: ['./autoSync-option.component.css']
})
export class AutoSyncOptionComponent implements OnInit {

  synchronisationOptionForm: FormGroup;
  preferences: GetPreferenceDto = {
    autoSyncOn: false
  };

  constructor(
    private formBuilder: FormBuilder,
    private preferencesService: PreferencesService,
  ) {
    this.synchronisationOptionForm = this.formBuilder.group({
      autoSynchronisation: ''
    });
  }

  onSubmit(syncOptionData: PreferenceDTO): void {
    this.preferencesService.enroll(syncOptionData)
      .subscribe(
        data => {
          this.ngOnInit();
        },
        error => console.error('Error!', error)
      );
  }

  ngOnInit(): void {
    this.preferencesService.getPreferences().subscribe((preferences: GetPreferenceDto) => {
      this.preferences = preferences;
    });
  }
}










