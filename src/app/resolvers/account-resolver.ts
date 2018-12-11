import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/forkJoin';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { ApiService } from '../service';
import { AccountDetailDto } from '../model';
import { ApiResponse } from 'app/model/api.response';

@Injectable()

export class AccountResolver implements Resolve<ApiResponse>{

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApiResponse> {
         const accountId: number = +route.params['accountId'];
         //TODO: add error handling as below
         return this.apiService.getUserByAccountId(accountId);
      }
}

// interface IReturn {
//   records: IData[];
//   dynamicTitle: string;
// }

// @Injectable()
// export class RecordCompResolver implements Resolve<IReturn> {

//   constructor(private _mockService: MockHttpService, private _ngAlert: NgAlertService) { }

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReturn> {
//      const withError = route.params['with-error'] === 'true';
//  return  Observable.forkJoin ([
//       this._mockService.dynamicTitle('resolver'),
//       this._mockService.request(withError)
//     ])
//     .map(results => ({
//         dynamicTitle: results[0],
//         records : results[1]
//     }))
//    .catch(error => {
//       this._ngAlert.push({
//         message: error.message,
//         type: MessageType.error
//       });
//       return Observable.throw(error);
//     });
//   }

// }