import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ITDeclarationsComponent } from './it-declarations/it-declarations.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ManageDashboardComponent } from './manage-dashboard/manage-dashboard.component';
import { ProofSubmissionComponent } from './proof-submission/proof-submission.component';
import { ProofValidationComponent } from './proof-validation/proof-validation.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component : LoginPageComponent},
  {path:'home',component : HomePageComponent},
  {path:'employee-management',component : EmployeeManagementComponent},
  {path:'create',component : CreateEmployeeComponent},
  {path:'validation',component : ProofValidationComponent},
  {path:'submission',component : ProofSubmissionComponent},
  {path:'manage',component : ManageDashboardComponent},
  {path:'declaration',component : ITDeclarationsComponent},
  {path:'update/:employeeid',component : UpdateComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
