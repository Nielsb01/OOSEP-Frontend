import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SynchroniseComponent} from './synchronise/synchronise.component';
import {LoginComponent} from './login/login.component';
import {AutoSyncOptionComponent} from './autoSync-option/autoSync-option.component';
import {JiraUsernamesComponent} from './jira-usernames/jira-usernames.component';
import {HomeComponent} from './home/home.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SynchronisationResultsComponent } from './synchronise/synchronisation-results/synchronisation-results.component';


@NgModule({
  declarations: [
    AppComponent,
    SynchroniseComponent,
    LoginComponent,
    AutoSyncOptionComponent,
    JiraUsernamesComponent,
    HomeComponent,
    SynchronisationResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
