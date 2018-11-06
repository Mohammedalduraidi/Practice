import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  constructor() {
    console.log("Constructor")
  }

  ngOnDestroy() {
    console.log("OnDestroy");
  }
  ngAfterContentInit() {
    console.log("AfterContentInit");
  }
  ngAfterViewInit() {
    console.log("AfterViewInit");
  }


  ngOnInit() {
    console.log("OnInit");
  }


}
