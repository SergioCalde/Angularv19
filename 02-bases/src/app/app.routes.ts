import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { HeroPage } from './pages/hero/hero-page';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page/dragonball-super-page';

export const routes: Routes = [
  {
    path: 'hero',
    component: HeroPage,
    // loadComponent: () => import('./pages/hero/hero-page').then( m => m.HeroPage ),
  },
  {
    path: 'dragonball',
    component: DragonballPage,
    // loadComponent: () => import('./pages/dragonball-page/dragonball-page').then( m => m.DragonballPage ),
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPage,
    // loadComponent: () => import('./pages/dragonball-page/dragonball-page').then( m => m.DragonballPage ),
  },
  {
    path: '',
    // component: CounterPage,
    loadComponent: () => import('./pages/counter/counter-page').then( m => m.CounterPage ),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
