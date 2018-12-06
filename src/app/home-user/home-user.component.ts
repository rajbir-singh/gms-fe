import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Utils } from '../service/utils';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  title = 'Home';
  greeting = {};
  account : any;

  constructor(private utils: Utils, private activatedRoute: ActivatedRoute, private apiService: ApiService, private http: HttpClient) {
  }
 
  authenticated() { return this.apiService.isUserLoggedIn(); }

  ngOnInit() {
    let accountIdStr = this.activatedRoute.snapshot.paramMap.get('accountId');
    let accountId = this.utils.getNumberFromString(accountIdStr);
    this.apiService.getUserById(accountId).subscribe(account => {
      this.account = this.utils.getContent(account);
      console.log('Account with accountId: ' + accountId + 'is ' + account);
    })
  }

}