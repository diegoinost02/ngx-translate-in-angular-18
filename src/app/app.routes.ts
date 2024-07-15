import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        // loadChildren: () => import('../../public/i18n/en.json').then(m => m.default)
    }
];
