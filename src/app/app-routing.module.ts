import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { LoginComponent } from './login/login.component';
import { IsUserLoggedInGuard } from './guards/isUserLoggedIn.guard';
import { UserHomeGuard } from './guards/userHome.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';
import { CanUserEditAccountGuard } from './guards/canUserEditAccount.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeUserComponent,
        canActivate: [UserHomeGuard],
        data: { redirectPath: '/login' }
    },
    {
        path: 'home/:accountId',
        component: HomeUserComponent,
        canActivate: [IsUserLoggedInGuard],
        data: { redirectPath: '/login' }
    },
    {
        path: 'permission-denied',
        component: PermissionDeniedComponent
    },
    {
        path: 'user-list',
        component: ListUserComponent
    },
    {
        path: 'edit-user/:accountId',
        component: EditUserComponent,
        canActivate: [CanUserEditAccountGuard],
        data: { redirectPath: '/login' }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
