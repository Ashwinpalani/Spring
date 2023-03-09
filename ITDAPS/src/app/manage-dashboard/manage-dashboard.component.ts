import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
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
  employeeid?:any;

  searchText!:any;
 dtOptions: any = {};
 dtTrigger: Subject<any> = new Subject<any>();



  constructor(private auth:AuthService,private router:Router,private route: ActivatedRoute){

  }

  ngOnInit(): void {
     this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 5,
      processing: true,
    //  dom: 'Bfrtip',
    //     buttons: [
    //         'copy', 'csv', 'excel', 'print'
    //     ]

      
    };

    this.getService();
   }
 
   gotoEmployeeList(){
     this.router.navigate(['/manage']);
   }
 
  private getService(){
  this.auth.getAll().subscribe(data =>{
    this.employees=data;
    this.dtTrigger.next(null);
    console.log(data);
    
    
  },error=>console.error(error)
  );
  }
  
  updateEmployee(employeeid:any){
   this.router.navigate(['/update', employeeid]);
 }
 

 
  deleteEmployee(employeeid: any): void{
    
   this.auth.deleteDetails(employeeid).subscribe( data => {
     alert("deleted Successfully");
    // this.gotoEmployeeList();
    this.getService();
    
   })
 }

}
