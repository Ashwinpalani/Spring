import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  employee = {
    email: "", password: ""
  };


  submit = false;
  loading = false;
  errorMessage = "";

  gotopage() {
    alert("loginSuccessfully");
    this.router.navigate(['/home']);
  }


  onSubmit() {
    debugger
    var useremail = this.employee.email;
    var userpassword = this.employee.password;
    console.log(useremail, userpassword);
    this.auth.loginAuthentication(useremail, userpassword).subscribe(data => {
      console.log(data);
      if (data!=null) {
        this.gotopage();
      }
        else {
          this.errorMessage = "* Invalid email-id or password credentials";
          this.router.navigate(['/login']);
        }
    }, error => console.log(error));
  }

}
