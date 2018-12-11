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
import { AccountResolver } from './resolvers';

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
        data: { redirectPath: '/login' },
        resolve: { dataResolved: AccountResolver}
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
        data: { redirectPath: '/permission-denied' }
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
    },
    //The order of the routes in the configuration matters and this is by design. The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes. In the configuration above, routes with a static path are listed first, followed by an empty path route, that matches the default route. The wildcard route comes last because it matches every URL and should be selected only if no other routes are matched first.
    // TODO: add PNFC 
    //{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
