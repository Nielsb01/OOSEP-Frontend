

import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EnrollmentService} from '../enrollment.service';
import {LoginDTO} from '../login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public enrollmentService: EnrollmentService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onSubmit(loginData: LoginDTO) {
    console.log('login attempt made: ', loginData);
    this.enrollmentService.enroll(loginData)
      .subscribe(
        data => console.log('Response', data),
        error => console.error('Error!', error)
      );
  }
}
