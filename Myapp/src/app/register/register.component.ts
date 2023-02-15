import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  formdata={name:"",email:"",password:""};
  submit=false;
  errorMessage="";

  ngOnInit(): void {
    
  }

onSubmit(){
console.log(this.formdata);
}

}
