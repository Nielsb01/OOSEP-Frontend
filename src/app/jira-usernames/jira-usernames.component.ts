import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsernamesDto} from '../dto/usernames.dto';
import {JiraUsernamesService} from '../services/jira-usernames.service';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-jira-usernames',
  templateUrl: './jira-usernames.component.html',
  styleUrls: ['./jira-usernames.component.css']
})
export class JiraUsernamesComponent {

  public usernamesForm: FormGroup;

  constructor(
    private jiraUsernamesService: JiraUsernamesService,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
  ) {
    this.usernamesForm = this.formBuilder.group({
      originEmailAddress: ['', [Validators.required, Validators.email]],
      destinationEmailAddress: ['', [Validators.required, Validators.email]]
    });
  }

  public onSubmit(usernamesData: UsernamesDto): void {
    this.jiraUsernamesService.getJiraUsernames(usernamesData);
  }
}
