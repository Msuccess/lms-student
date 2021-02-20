import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {} as any;
  signUpForm: FormGroup;
  submitted = false;
  loading = new BehaviorSubject<boolean>(false);
  errors = new BehaviorSubject<any>([]);
  simpleOption = [];
  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  initSignUpIndividualForm(): void {
    this.signUpForm = this.formBuilder.group({
      fullName: [this.user.fullName, Validators.required],
      userClass: [this.user.userClass],
      username: [this.user.username, Validators.required],
      email: [
        this.user.email,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phoneNumber: [this.user.phoneNumber, Validators.required],
      password: [
        this.user.password,
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      gender: [this.user.gender],
      role: 'student',
    });
  }

  get formControl(): any {
    return this.signUpForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.loading.next(true);

    this.auth.signUp(this.signUpForm.value).subscribe(
      (res: any) => {
        // this.toastrService.success('Success', 'Registered Successfully');
        this.loading.next(false);
        this.router.navigate(['/auth/login']);
      },
      (error: any) => {
        this.loading.next(false);
        // this.toastrService.error('Error', 'Review the errors on this page ');
        // this.errors.next(this.errorService.getErrors(error.error));
      }
    );
  }

  closeAlert(): any {
    this.errors.next([]);
  }

  ngOnInit(): void {
    this.initSignUpIndividualForm();
  }
}
