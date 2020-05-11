

import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      syncLoginUsername: '',
      syncLoginPassword: ''
    });
  }

  onSubmit(loginData) {
    console.log('login attempt made: ', loginData);
  }
}

