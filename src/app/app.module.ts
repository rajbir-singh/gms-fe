import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { FormsModule } from '@angular/forms';
import { AngularWebStorageModule } from 'angular-web-storage';
import { ReactiveFormsModule }          from '@angular/forms';

/************* SERVICES **********/
import { ApiService } from './service/api.service';
import { Utils } from './service/utils';
import { HomeUserComponent } from './home-user/home-user.component';


/************* GUARDS ***********/
import { IsUserLoggedInGuard } from './guards/isUserLoggedIn.guard';
import { UserHomeGuard } from './guards/userHome.guard';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    HomeUserComponent,
    PermissionDeniedComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    AppRoutingModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'}),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule   
  ],
  providers: [
    FormBuilder,  
    { 
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }, 
    ApiService, Utils, IsUserLoggedInGuard, UserHomeGuard],
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