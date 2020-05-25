import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let userId = this.storageService.getUserId();
    console.log('hoi');

    if (userId <= 0) {
      this.router.navigateByUrl('/login');
    }
  }
}
