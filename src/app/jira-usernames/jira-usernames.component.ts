import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsernamesDto} from '../dto/usernames.dto';
import {JiraUsernamesService} from '../services/jira-usernames.service';

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
  ) {
    this.usernamesForm = this.formBuilder.group({
      originUsername: ['', [Validators.required, Validators.email]],
      destinationUsername: ['', [Validators.required, Validators.email]]
    });
  }

  public onSubmit(usernamesData: UsernamesDto): void {
    this.jiraUsernamesService.getJiraUsernames(usernamesData).subscribe((data) => {

    }, (error) => console.error(error));
  }
}
