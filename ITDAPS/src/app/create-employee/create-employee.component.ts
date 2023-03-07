import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  constructor(private auth: AuthService, private router: Router,private formBuilder: FormBuilder) { }




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



  registerForm!: FormGroup;
    submitted = false;

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['test', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

  }



function MustMatch(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}

