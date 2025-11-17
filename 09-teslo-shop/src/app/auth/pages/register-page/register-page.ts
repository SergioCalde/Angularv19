import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '@auth/services/auth';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.html',
})
export class RegisterPage { 

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);
  router = inject(Router);

  authService = inject(Auth);

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    fullName: ['', [Validators.required]],
  });

  onSubmit() {
    if( this.registerForm.invalid ) {
      this.hasError.set(true);
      this.messageError();
      return;
    }

    const { email, password, fullName } = this.registerForm.value;
    
    this.authService.register(email!, fullName!, password!)
      .subscribe( (isAuthenticated) => {
        if( isAuthenticated ) {
          this.router.navigateByUrl('/');
          return;
        }

        this.hasError.set(true);
        this.messageError();
      });

  }

  messageError() {
    setTimeout(() => this.hasError.set(false), 3000);
    return
  }

}
