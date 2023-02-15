import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Arun';
  isDisabled:boolean=true;

  formdata={
    email : "",
    password : "",
    address : ""
  };

  users1=[{names:"ashwin",age:"26"},
 {names:"sam",age:"25"},
 {names:"sathish",age:"23"},
  {names:"arun",age:"29"},
 {names:"shiva",age:"21"}];

 users2=[{names:"sam",age:"25"},,
 {names:"ashwin",age:"26"},
 {names:"sathish",age:"23"},
  {names:"arun",age:"29"},
 {names:"shiva",age:"21"}];

 users = this.users1;

 constructor(){
  this.users = this.users1;
 }

 submit(){
  console.log(this.formdata);
 }

 onSubmit(name:any){
  console.log(name);
  
 }
 
}
