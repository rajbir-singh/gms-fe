import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService, GoogleLoginProvider } from "angularx-social-login";
import { Router } from "@angular/router";
import { ApiService } from '../service/api.service';
import { Utils } from '../service/utils';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  // credentials = { username: '', password: '' };

  constructor(private utils: Utils, private apiService: ApiService, private socialAuthService: AuthService, private router: Router) {
  }

  public signinWithGoogle() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => { //on success
        //this will return user data from google. What you need is a user token which you will send it to the server
        this.sendToRestApiMethod(userData.idToken);
      }
    );
  }

  sendToRestApiMethod(idTokenString: String): void {
    this.apiService.login(idTokenString)
      .subscribe(account =>  {
        console.log('Google Login Successful');
        let accountContent = this.utils.getContent(account);
        this.apiService.setLoggedInAccountId(accountContent.accountId);
        this.router.navigateByUrl('/home/' + accountContent.accountId); 
      }, error => {
        console.log('Error occured while loggin in using Google', + error);
      }
      );
  }

  login() {
    // this.apiService.authenticate(this.credentials, () => {
    //   this.router.navigateByUrl('/');
    // });
    // return false;
  }

  // KEY = 'value';
  // value: any = null;

  //   set(expired: number = 0) {
  //       this.local.set(this.KEY, { a: 1, now: +new Date }, expired, 's');
  //   }

  //   remove() {
  //       this.local.remove(this.KEY);loggedInAccountIdKey
  //   }

  //   get() {
  //       this.value = this.local.get(this.KEY);
  //   }

  //   clear() {
  //       this.local.clear();
  //   }

}