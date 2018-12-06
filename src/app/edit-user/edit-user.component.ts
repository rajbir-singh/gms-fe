import { Component, OnInit , Inject} from '@angular/core';
import { Router } from "@angular/router";
import { AccountDetailDto } from "../model/account.detail.dto";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { ApiService } from "../service/api.service";
import { Utils } from "../service/utils";

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
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.apiService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(this.utils.getContent(data));
      });
  }

  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(this.utils.getApiSucess(data)) {
            alert('User updated successfully.');
            this.router.navigate(['list-user']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}