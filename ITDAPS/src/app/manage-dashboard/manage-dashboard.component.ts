import { Component, ViewChild } from '@angular/core';
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
  employeeid?:any;

  searchText!:any;


  


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
    this.employees=data;
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

filters(){
  
}

  Search(){
    debugger
   // alert(this.searchText)
    if(this.searchText!== ""){
      // let searchValue = this.searchText;
  
      // this.listOfContacts = this.listOfContacts.filter((data:any) =>{
      //   // return data.employeeid.toLocaleLowerCase().match(searchValue)
      //    return data.employeeid.match(searchValue);
      // // you can keep on adding object properties here   
      //       });
      //       console.log(this.listOfContacts);

      this.employeeid=this.searchText;
      this.auth.getEmployeeById(this.employeeid).subscribe(data => {
        this.employee=data;
        console.log(this.employee);
        return this.employee;
       
      }, error => console.log(error)); 
          }
          else { 
           this.auth.getAll().subscribe(data => {
    
               this.employees = data;
           
                  }, error => console.error(error));
            // if(this.searchText== ""){ you don't need this if
            
          } 
      }



}
