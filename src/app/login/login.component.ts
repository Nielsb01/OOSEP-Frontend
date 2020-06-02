import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EnrollmentService} from '../services/enrollment.service';
import {LoginDTO} from '../dto/login.dto';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private enrollmentService: EnrollmentService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  /**
   * Method will call the enroll method of the {@link EnrollmentService} whenever the frontend form does a submit.
   * @param loginData is a {@link LoginDTO} consisting of a username and password.
   */
  onSubmit(loginData: LoginDTO) {
    this.enrollmentService.enroll(loginData)
      .subscribe(
        data => {
          this.storageService.setUserId(data);
          this.ngOnInit();
        },
        error => console.error('Error!', error)
      );
  }

  ngOnInit(): void {
    let userId = this.storageService.getUserId();

    if (userId > 0) {
      this.router.navigateByUrl('/home');
    }
  }
}

