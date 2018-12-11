import { Component, OnInit , Inject} from '@angular/core';
import { Router } from "@angular/router";
import { AccountDetailDto } from "../model/account.detail.dto";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { ApiService } from "../service/api.service";
import { Utils } from "../service/utils";
import { ApiResponse } from 'app/model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: AccountDetailDto;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService, private utils: Utils) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }

    dob: string, fathersName: string, mothersName: string, mobile1: string, mobile2: string, email1: string, email2: string, height: number, weight: number, qualification: string, occupation: string, income: number, addressDetailDtos: AddressDetailDto[], ownHouse: boolean, onlyChild: boolean, details: string

    this.editForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.min(5), Validators.max(50)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.apiService.getUserByAccountId(+userId)
      .subscribe( (account: ApiResponse) => {
        // account = new ApiResponse(account);
        this.editForm.setValue(account);
      });
  }

  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        (account: ApiResponse) => {
          account = new ApiResponse(account);
          if(account.getApiSucess()) {
            alert('User updated successfully.');
            this.router.navigate(['list-user']);
          }else {
            alert(account.getMessage());
          }
        },
        error => {
          alert(error);
        });
  }

}