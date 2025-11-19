import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { Auth } from '@auth/services/auth';
import { firstValueFrom } from 'rxjs';

export const UnauthenticatedGuard: CanMatchFn = async (
    route: Route,
    segments: UrlSegment[]
) => {

    const authService = inject(Auth);
    const router = inject(Router);

    const isAuthenticated = await firstValueFrom( authService.checkStatus() );
    if( isAuthenticated ) {
        router.navigateByUrl('/');
        return false
    };

    return true;
}