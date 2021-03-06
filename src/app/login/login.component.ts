import { Component } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import {Router} from "@angular/router";
import { AppService } from "../app.service";
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private apiService: ApiService, private socialAuthService: AuthService, private app: AppService, private router: Router) {
  }

  public signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => { //on success
         //this will return user data from google. What you need is a user token which you will send it to the server
         this.sendToRestApiMethod(userData.idToken);
      }
    );
  }

  sendToRestApiMethod(idTokenString: string) : void {
    this.apiService.login(idTokenString)
      .subscribe(onSuccess => {
        console.log('Google Login Successful');
       //login was successful
       //save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login
     }, onFail => {
        //login was unsuccessful
        //show an error message
     }
   );
 }

  login() {
    this.app.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

}