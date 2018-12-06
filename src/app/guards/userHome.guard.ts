import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { ApiService } from "../service/api.service";
import { Utils } from "../service/utils";


@Injectable()
export class UserHomeGuard implements CanActivate {

    constructor(private utils: Utils, private router: Router, private apiService: ApiService, private localStorageService: LocalStorageService, private activatedRoute: ActivatedRoute) { }

    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        
        let customRedirect = this.activatedRoute.data['redirectPath'];
        var loggedInAccountId: string = this.apiService.getLoggedInAccountId();

        if (this.utils.isStringNonEmpty(loggedInAccountId)) {
            this.router.navigate(['/home/' + loggedInAccountId]);
        }
        else {
            let redirect = !!customRedirect ? customRedirect : '/login';
            this.router.navigate([redirect]);
        }
        return false;
    }
}