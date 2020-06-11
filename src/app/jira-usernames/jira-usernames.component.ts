import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsernamesDto} from '../dto/usernames.dto';
import {JiraUsernamesService} from '../services/jira-usernames.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jira-usernames',
  templateUrl: './jira-usernames.component.html',
  styleUrls: ['./jira-usernames.component.css']
})
export class JiraUsernamesComponent {

  public usernamesForm: FormGroup;

  constructor(
    private jiraUsernamesService: JiraUsernamesService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.usernamesForm = this.formBuilder.group({
      originUsername: ['', [Validators.required, Validators.email]],
      destinationUsername: ['', [Validators.required, Validators.email]]
    });
  }

  public onSubmit(usernamesData: UsernamesDto): void {
    this.jiraUsernamesService.getJiraUsernames(usernamesData, (data) => {
      this.router.navigateByUrl('/');
    });
  }
}
