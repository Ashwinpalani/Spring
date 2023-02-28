import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private auth:AuthService){}

ngOnInit(): void {
  //added for blocking the direct access of this page
  this.auth.canAccess();
}
}
