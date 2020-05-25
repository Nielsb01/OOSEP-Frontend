import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraUsernamesComponent } from './jira-usernames.component';

describe('JiraUsernamesComponent', () => {
  let component: JiraUsernamesComponent;
  let fixture: ComponentFixture<JiraUsernamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraUsernamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraUsernamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
