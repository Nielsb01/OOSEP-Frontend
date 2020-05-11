

import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {EnrollmentService} from '../enrollment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private enrollmentService: EnrollmentService,
  ) {
    this.loginForm = this.formBuilder.group({
      syncLoginUsername: '',
      syncLoginPassword: ''
    });
  }

  onSubmit(loginData) {
    console.log('login attempt made: ', loginData);
    this.enrollmentService.enroll(loginData)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      );
  }
}

