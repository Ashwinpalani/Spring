import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-manage-dashboard',
  templateUrl: './manage-dashboard.component.html',
  styleUrls: ['./manage-dashboard.component.css']
})
export class ManageDashboardComponent {

  employees?:Employee[];
  employee!:Employee;

  employeeid?:number;

  constructor(private auth:AuthService,private router:Router,private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.getService();

   }
 
   gotoEmployeeList(){
     this.router.navigate(['/manage']);
   }
 
  private getService(){
  this.auth.getAll().subscribe(data =>{
    console.log(data);
    this.employees=data;
    
  });
  }
  
  updateEmployee(id:any){
   this.router.navigate(['update', id]);
 }
 
//  employeeDetails(id: number){
//    this.router.navigate(['view-page', id]);
//  }
 
  deleteEmployee(id: any): void{
    debugger
   this.auth.deleteDetails(id).subscribe( data => {
     console.log(data);
     alert("deleted Successfully");
     this.getService();
   })
 }
}
