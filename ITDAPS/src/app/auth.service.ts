import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private baseUrl1="http://localhost:8080/tax/get";
  private baseUrl2="http://localhost:8080/tax/save";
  private baseUrl3="http://localhost:8080/tax/delete";
  private baseUrl4="http://localhost:8080/tax/update";
  private baseUrl5="http://localhost:8080/tax/getbyid";
 

  constructor(private router: Router, private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }

  canAccess() {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  canAuthenticate() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }



  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }


  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl1}`);
   }
 
   createDetails(employee : Employee) : Observable<Employee>{

    return this.http.post<Employee>(`${this.baseUrl2}`,employee);
   }

   deleteDetails(employeeid: number) {
    debugger
    return this.http.delete<Employee>(`${this.baseUrl3}/${employeeid}`);
  }

  updateEmployee(employeeid:number,employee : Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl4}/${employeeid}`,employee);
  }

  getEmployeeById(employeeid: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl5}/${employeeid}`);
  }


}
