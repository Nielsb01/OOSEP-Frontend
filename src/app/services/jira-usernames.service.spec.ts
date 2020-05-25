import { TestBed } from '@angular/core/testing';

import { JiraUsernamesService } from './jira-usernames.service';

describe('JiraUsernamesService', () => {
  let service: JiraUsernamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JiraUsernamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
