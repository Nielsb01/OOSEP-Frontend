import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { LoginService } from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onSubmit(loginData) {
    this.loginService.handleLogin(loginData);
  }

}
