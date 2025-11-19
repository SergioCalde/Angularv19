import { Routes } from '@angular/router';
import { UnauthenticatedGuard } from '@auth/guards/unauthenticated.guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes'),
        //TODO: Add auth guard
        canMatch: [
            // () => {
            //     console.log('auth guard');
            //     return true;
            // }
            UnauthenticatedGuard
        ],
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin-dashboard/admin-dashboard.routes'),
    },
    {
        path: '',
        loadChildren: () => import('./store-front/store-front.routes')
    },
];
