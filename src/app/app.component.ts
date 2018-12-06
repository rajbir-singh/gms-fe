import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './service/api.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  constructor(private router: Router, private apiService: ApiService) {

  }

  logout() {
    this.apiService.removeLoggedInAccountId();  
    // this.apiService.authenticated = false;
    console.log('UserLogged out successfully');
    this.router.navigateByUrl('/login');
  }
}
