import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';


 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { ITDeclarationsComponent } from './it-declarations/it-declarations.component';
import { ProofValidationComponent } from './proof-validation/proof-validation.component';
import { ProofSubmissionComponent } from './proof-submission/proof-submission.component';
import { ManageDashboardComponent } from './manage-dashboard/manage-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    HomePageComponent,
    CreateEmployeeComponent,
    EmployeeManagementComponent,
    ITDeclarationsComponent,
    ProofValidationComponent,
    ProofSubmissionComponent,
    ManageDashboardComponent,
    NavbarComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  MatTabsModule,
  BrowserAnimationsModule,
  MatIconModule,
  MatPaginatorModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
