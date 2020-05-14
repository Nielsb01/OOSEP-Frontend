import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnrollmentService } from '../services/enrollment.service';
import {PreferenceDTO} from '../dto/preference.dto';
import {PreferencesService} from '../services/preferences.service';

@Component({
  selector: 'app-manual-sync',
  templateUrl: './autoSync-option.component.html',
  styleUrls: ['./autoSync-option.component.css']
})
export class AutoSyncOptionComponent{

  synchronisationOptionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private preferencesService: PreferencesService,
  ) {
    this.synchronisationOptionForm = this.formBuilder.group({
      autoSynchronisation: ''
    });
  }


  onSubmit(synchOptionData: PreferenceDTO) {
    const backendEndpoint = 'http://localhost:8080/autoSyncOption';
    console.log('Synchronisation option was changed to: ', synchOptionData);
    this.preferencesService.enroll(synchOptionData)
      .subscribe(
        data => console.log('Response', data),
        error => console.error('Error!', error)
      );
  }

}










