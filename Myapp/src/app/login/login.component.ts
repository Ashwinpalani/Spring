import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router){}

  ngOnInit(): void{
    this.auth.canAuthenticate();
  }

 logindata={email:"",password:""};
 submit=false;
 loading=false;
 errorMessage="";

 gotopage(){
  this.router.navigate(['/home']);
 }

onSubmit(){
  this.loading=true;
  console.log(this.logindata);
  this.gotopage();
  this.auth.login(this.logindata.email,this.logindata.password)
  .subscribe(
    {
      next: data => {
        this.auth.storeToken(data.idToken);
        console.log("Login Successfully " + data.idToken);
        this.auth.canAuthenticate();
        
      },
      error: data => {
        if (data.error.error.message == "INVALID_EMAIL" || data.error.error.message == "INVALID_PASSWORD") {
          this.errorMessage = "Invalid credentials!";
        }
        else {
          this.errorMessage = "Invalid error while logging into the account!";
        }
      }
    }
  ).add(()=>{
    this.loading=false;
  });
}

}