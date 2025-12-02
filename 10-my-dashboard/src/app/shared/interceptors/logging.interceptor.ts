import { environment } from "@/environments/environment";
import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";


export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  // Inject the current `AuthService` and use it to get an authentication token:
    const token = environment.APIKEY;
    // Clone the request to add the authentication header.
    const newReq = req.clone({
    headers: req.headers.append('x-api-key', `${token}`),
    });

    return next(newReq);
}
