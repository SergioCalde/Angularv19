import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '@auth/services/auth';

@Component({
  selector: 'front-navbar',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './front-navbar.html',
})
export class FrontNavbar { 
  authService = inject(Auth);
}
