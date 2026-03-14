import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('@modules/dashboard/dashboard.component').then((c) => c.DashboardComponent),
  },
  {
    path: 'gestionar',
    loadComponent: () => import('@modules/management/management').then((c) => c.Management),
  },
];
