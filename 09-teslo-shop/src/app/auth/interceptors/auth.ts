import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, tap } from "rxjs";


import { Auth } from "../services/auth";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  // Inject the current `AuthService` and use it to get an authentication token:
    const token = inject(Auth).token();
    // Clone the request to add the authentication header.
    const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${token}`),
    });
    return next(newReq);
}
