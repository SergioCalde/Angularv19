import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '@/app/app.routes';

@Component({
  selector: 'side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu {
  menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => !route.path?.includes('**'))
    .filter((route) => !route.path?.includes(':'));
}
