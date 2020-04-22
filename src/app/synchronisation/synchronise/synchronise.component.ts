import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-synchronise',
  templateUrl: './synchronise.component.html',
  styleUrls: ['./synchronise.component.css']
})
export class SynchroniseComponent {

  // Gaat waarschijnlijk binnenkort een constante worden als meer components met backend moeten communiceren
  backendUrl = '000.000.000.000';

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {  }

  synchroniseWorkedTime() {
    this.http.post(this.backendUrl, 'JSON van gegevens van de gebruiker', this.httpOptions);
  }
}
