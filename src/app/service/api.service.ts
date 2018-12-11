import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountDetailDto } from "../model/account.detail.dto";
import { Observable } from "rxjs";
// import {ApiResponse} from "../model/aapi.response";
import { ApiResponse } from '../model';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

import { Utils } from "./utils";

@Injectable()
export class ApiService {

  constructor(private utils: Utils, private localStorageService: LocalStorageService, private http: HttpClient) { }
  public beUrl: string = 'http://sprangular.herokuapp.com/api/account/';
  // private beUrl: string = 'http://localhost:8080/api/account/';
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private loggedInAccountIdKey = 'loggedInAccountId';
  // authenticated = false;

  // authenticate(credentials, callback) {

  //       const headers = new HttpHeaders(credentials ? {
  //           authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
  //       } : {});

  //       this.http.get('user', {headers: headers}).subscribe(response => {
  //           if (response['name']) {
  //               this.authenticated = true;
  //           } else {
  //               this.authenticated = false;
  //           }
  //           return callback && callback();
  //       });

  //   }

  removeLoggedInAccountId() {
    this.localStorageService.remove(this.loggedInAccountIdKey);
  }

  setLoggedInAccountId(accountId: string) {
    this.localStorageService.set(this.loggedInAccountIdKey, accountId);
  }

  getLoggedInAccountId(): string {
    return this.localStorageService.get(this.loggedInAccountIdKey);
  }

  isUserLoggedIn(): boolean {
    return this.utils.isStringNonEmpty(this.getLoggedInAccountId());
  }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.beUrl + 'all');
  }

  getUserByAccountId(id: number): Observable<ApiResponse> {
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