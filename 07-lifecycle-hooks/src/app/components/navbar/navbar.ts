import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styles: `
    nav {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }

    nav a {
      text-decoration: none;
      color: #1139dcff;
    }

    .active {
      color: #341162;
      font-weight: bold;
    }
  `,
  encapsulation: ViewEncapsulation.None
})
export class Navbar { }
