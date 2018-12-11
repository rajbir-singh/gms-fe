import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountDetailDto } from "../model/account.detail.dto";
import { Observable } from "rxjs";
import { ApiResponse } from "../model/api.response";
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { ApiService } from "./api.service";
import { Utils } from "./utils";

@Injectable()
export class LoginService {

  constructor(private router: Router, private utils: Utils, private apiService: ApiService, private localStorageService: LocalStorageService, private http: HttpClient) { }

  login(idTokenString) {
    var googleLoginResponse: Observable<ApiResponse> = this.http.get<ApiResponse>(this.apiService.beUrl + 'googleLogin/' + idTokenString, { headers: this.apiService.headers });
    googleLoginResponse.subscribe((account: ApiResponse) => {
      console.log('Google Login Successful');
      let accountContent: AccountDetailDto = account.getContent();
      this.apiService.setLoggedInAccountId(accountContent.accountId.toString());
      this.router.navigateByUrl('/home/' + accountContent.accountId);
    }, error => {
      console.log('Error occured while logging in using Google', + error);
    }
    );
  }

  logout() {
    this.apiService.removeLoggedInAccountId();
    console.log('Logout Successful');
  }
}
