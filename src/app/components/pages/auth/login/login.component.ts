import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {} as any;
  signInForm: FormGroup;
  loading = new BehaviorSubject<boolean>(false);
  errors = new BehaviorSubject<any>([]);

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    // private errorService: ErrorService,
    private router: Router
  ) {}

  initSignInForm(): void {
    this.signInForm = this.formBuilder.group({
      username: [this.user.username, Validators.compose([Validators.required])],
      password: [
        this.user.password,
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  get formControl(): any {
    return this.signInForm.controls;
  }

  onSubmit(): void {
    const controls = this.signInForm.controls;
    // check form
    if (this.signInForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.loading.next(true);

    this.auth.signIn(this.signInForm.value).subscribe(
      (res: any) => {
        this.loading.next(false);
        this.router.navigate(['/app/dashboard']);
      },
      (error: any) => {
        this.loading.next(false);
        // this.errors.next(this.errorService.getErrors(error.error));
      }
    );
  }

  closeAlert(): any {
    this.errors.next([]);
  }

  ngOnInit(): void {
    this.initSignInForm();
  }
}
