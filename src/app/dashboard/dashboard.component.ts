import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAdmin: any = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.isAdmin = JSON.parse(localStorage.getItem('user') || '{}');

  }
  submit() {
    this.route.navigate(['create-page']);
  }

}
