import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { Auth } from '@auth/services/auth';
import { firstValueFrom } from 'rxjs';

export const isAdminGuard: CanMatchFn = async (
    route: Route,
    segments: UrlSegment[]
) => {

    const authService = inject(Auth);
    const router = inject(Router);

    const isAdmin = await firstValueFrom( authService.checkStatus() );

    // if( !isAdmin ) {
    //     router.navigateByUrl('/auth/login');
    //     return false
    // };

    return authService.isAdmin();
}