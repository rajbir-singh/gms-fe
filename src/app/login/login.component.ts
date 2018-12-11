import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService, GoogleLoginProvider } from "angularx-social-login";
import { Router } from "@angular/router";
import { ApiService, Utils, LoginService } from '../service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  // credentials = { username: '', password: '' };

  constructor(private loginService: LoginService, private utils: Utils, private apiService: ApiService, private socialAuthService: AuthService, private router: Router) {
  }

  private signinWithGoogle() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => { //on success
        //this will return user data from google. What you need is a user token which you will send it to the server
        this.loginService.login(userData.idToken);
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