import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '@auth/services/auth';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.html',
})
export class LoginPage {

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);
  router = inject(Router);

  authService = inject(Auth);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if( this.loginForm.invalid ) {
      this.hasError.set(true);
      this.messageError();
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email!, password!)
      .subscribe( (isAuthenticated) => {
        if( isAuthenticated ) {
          this.router.navigateByUrl('/');
          return;
        }

        this.hasError.set(true);
        this.messageError();
      });
    // this.isPosting.set(true);
  }

  messageError() {
    setTimeout(() => this.hasError.set(false), 3000);
    return
  }

}
