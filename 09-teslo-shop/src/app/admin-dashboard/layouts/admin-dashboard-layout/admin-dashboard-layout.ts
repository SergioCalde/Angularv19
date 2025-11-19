import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { Auth } from '@auth/services/auth';

@Component({
  selector: 'app-admin-dashboard-layout',
  imports: [
    RouterOutlet,
    RouterLink, RouterLinkActive
],
  templateUrl: './admin-dashboard-layout.html',
})
export class AdminDashboardLayout { 

  authService = inject(Auth);
  router = inject(Router);

  user = computed(() => this.authService.user());

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
