import { Routes } from '@angular/router';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { LandingComponent } from './locations/landing/landing.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'coming-soon' },
  {
    path: 'coming-soon',
    title: 'Coming Soon',
    loadComponent: () => ComingSoonComponent,
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => LandingComponent,
  },
];
