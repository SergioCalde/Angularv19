import {Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '@app/gifs/services/gifs.service';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  gifService = inject(GifsService);

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      subLabel: 'Trending Gifs',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: '/dashboard/search',
      subLabel: 'Search Gifs',
    }
  ]

  searchHistory = computed( () => this.gifService.searchHistory() );

}
