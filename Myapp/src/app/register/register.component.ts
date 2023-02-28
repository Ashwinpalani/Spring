import { Component,OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  formdata={name:"",email:"",password:""};
  submit=false;
  errorMessage="";
  loading=false;

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

onSubmit(){
console.log(this.formdata);
this.loading=true;
// alert("Registered Successfully!");
this.auth
.register(this.formdata.name,this.formdata.email,this.formdata.password)
.subscribe({
  next:data=>{
    this.auth.storeToken(data.idToken);
    console.log('Registered id token '+ data.idToken);
   this.auth.canAuthenticate();
  },
  error:data=>{
    if(data.error.error.message=="INVALID_EMAIL"){
           this.errorMessage="Invalid email";
    }
    else if(data.error.error.message=="EMAIL_EXISTS"){
      this.errorMessage="Email exists already";
    }
    else{
      this.errorMessage="unknown error occured while creating new profile";
    }
  }
}).add(()=>{
this.loading=false;
console.log('Register Completed');
})

}

}
