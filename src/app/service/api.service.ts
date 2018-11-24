import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AccountDetailDto} from "../model/account.detail.dto";
import {Observable} from "rxjs/index";
// import {ApiResponse} from "../model/aapi.response";
import { ApiResponse } from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  // beUrl: string = 'http://sprangular.herokuapp.com/api/account/';
  beUrl: string = 'http://localhost:8080/api/account/';

  login(idTokenString) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.beUrl + 'googleLogin/', idTokenString);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.beUrl + 'all');
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.beUrl + id);
  }

  createUser(account: AccountDetailDto): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.beUrl, account);
  }

  updateUser(account: AccountDetailDto): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.beUrl + account.accountId, account);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.beUrl + id);
  }
}