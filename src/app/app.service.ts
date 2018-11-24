import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



//google auth client
// client Id : 476310390299-pvf5n4a0l7mk42vdv1bt86i1ug72dhkd.apps.googleusercontent.com
//client sercret : 6Xevlz2X-Uey5F8gbfRdAngO


@Injectable()
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get('user', {headers: headers}).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

}