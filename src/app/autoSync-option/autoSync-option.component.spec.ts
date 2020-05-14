import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSyncOptionComponent } from './autoSync-option.component';
import {Observable} from 'rxjs';
import {LoginDTO} from '../dto/login.dto';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PreferenceDTO} from '../dto/preference.dto';
import {PreferencesService} from '../services/preferences.service';
import createSpyObj = jasmine.createSpyObj;

describe('ManualSyncComponent', () => {
  let component: AutoSyncOptionComponent;
  let fixture: ComponentFixture<AutoSyncOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [AutoSyncOptionComponent],
      providers: [{provide: PreferencesService, useValue: createSpyObj<PreferencesService>(['enroll'])}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSyncOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should call enroll func when onSubmit is called', () => {
    const testData: PreferenceDTO = {
      autoSynchronisation: true,
    };
    component.onSubmit(testData);
    const preferenceMock = TestBed.get(PreferencesService);
    preferenceMock.enroll.and.returnValue(new Observable());
    expect(preferenceMock).toHaveBeenCalled();
  });
});
