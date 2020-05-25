import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SynchroniseComponent } from './synchronise/synchronise.component';
import { LoginComponent } from './login/login.component';
import { AutoSyncOptionComponent } from './autoSync-option/autoSync-option.component';
import { JiraUsernamesComponent } from './jira-usernames/jira-usernames.component';


@NgModule({
  declarations: [
    AppComponent,
    SynchroniseComponent,
    LoginComponent,
    AutoSyncOptionComponent,
    JiraUsernamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
