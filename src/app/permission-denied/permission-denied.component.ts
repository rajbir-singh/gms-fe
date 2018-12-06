import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; //https://angular.io/tutorial/toh-pt5#goback

@Component({
  selector: 'app-permission-denied',
  templateUrl: './permission-denied.component.html',
  styleUrls: ['./permission-denied.component.css']
})
export class PermissionDeniedComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

}
