import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  employeeid!:number;
  employee:Employee = new Employee();

  constructor(private router:Router,private route:ActivatedRoute,private auth:AuthService){

  }
  ngOnInit(): void {
    
    this.employeeid = this.route.snapshot.params['employeeid'];
    this.auth.getEmployeeById(this.employeeid).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    }, error => console.log(error));
  }

  onSubmit(){
    
    this.auth.updateEmployee(this.employeeid, this.employee).subscribe(data => {
      this.gotoEmployeeList();
      console.log(data);
    }, error => console.log(error));
  }

  gotoEmployeeList(){
    this.router.navigate(['/manage']);
  }
}
 

