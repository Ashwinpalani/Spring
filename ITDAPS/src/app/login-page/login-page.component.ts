import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private auth:AuthService,private router:Router){}

  ngOnInit(): void{
    this.auth.canAuthenticate();
  }

 employee:Employee=new Employee();
 submit=false;
 loading=false;
 errorMessage="";

 gotopage(){
  this.router.navigate(['/home']);
 }



}
