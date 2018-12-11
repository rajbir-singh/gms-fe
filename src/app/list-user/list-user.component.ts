import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {AccountDetailDto} from "../model/account.detail.dto";
import {ApiService} from "../service/api.service";
import { Utils } from "../service/utils"
import { ApiResponse } from 'app/model';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  accounts: any[];
  headerRow: string[];
  constructor(private router: Router, private apiService: ApiService, private utils: Utils) { }

  ngOnInit() {
    // if(!window.localStorage.getItem('token')) {
    //   this.router.navigate(['login']);
    //   return;
    // }
    this.headerRow = ['Name', 'Email', 'Mobile', 'Qualification', 'Occupation', 'Income', 'Height', 'Weight', 'Details'];
    this.apiService.getUsers()
      .subscribe( (accounts: ApiResponse) => {
        accounts = new ApiResponse(accounts);
          this.accounts = accounts.getContent();
      });
  }

  deleteUser(account: AccountDetailDto): void {
    this.apiService.deleteUser(account.accountId)
      .subscribe( data => {
        this.accounts = this.accounts.filter(u => u !== account);
      })
  };

  editUser(account: AccountDetailDto): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", account.accountId.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}