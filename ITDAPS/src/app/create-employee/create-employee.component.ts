import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = new Employee();


  constructor(private auth: AuthService, private router: Router) { }



  ngOnInit(): void {
    
  }

  saveEmployee() {
    this.auth.createDetails(this.employee).subscribe(data => {
      console.log(this.employee);
      alert("Account created Successfully");
      this.onclick();
    }, error => console.log(error));
  }

  onclick() {
    this.router.navigate(['/manage'])
  }




 

}
