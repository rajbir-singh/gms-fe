import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { getAuthServiceConfigs } from "./social-login.config";

/************* SERVICES **********/
import { ApiService } from './service/api.service';
import { Utils } from './service/utils';
import { HomeUserComponent } from './home-user/home-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    HomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    FormBuilder,  
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }, 
    ApiService, Utils],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function provideConfig() {
  let config = new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("476310390299-pvf5n4a0l7mk42vdv1bt86i1ug72dhkd.apps.googleusercontent.com")
}]);

return config;
}