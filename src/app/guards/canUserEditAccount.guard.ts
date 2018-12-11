import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { ApiService } from "../service/api.service";
import { Utils } from "../service/utils";


@Injectable()
export class CanUserEditAccountGuard implements CanActivate {

    constructor(private utils: Utils, private router: Router, private apiService: ApiService, private localStorageService: LocalStorageService, private activatedRoute: ActivatedRoute) { }

    canActivate(): boolean | Observable<boolean> | Promise<boolean> {

        let customRedirect = this.activatedRoute.data['redirectPath'];
        var loggedInAccountId: string = this.apiService.getLoggedInAccountId();
        var accountIdOfAccountToBeEdited = this.activatedRoute.snapshot.paramMap.get('accountId');

        if (this.utils.areTwoStringsSame(loggedInAccountId, accountIdOfAccountToBeEdited)) {
            return true;
        }
        else {
            let redirect = !!customRedirect ? customRedirect : '/permission-denied';
            this.router.navigate([redirect]);
        }
        return false;
    }
}