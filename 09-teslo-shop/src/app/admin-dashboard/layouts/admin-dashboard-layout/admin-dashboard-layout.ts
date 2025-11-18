import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
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

  user = computed(() => this.authService.user());

}
