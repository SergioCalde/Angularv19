import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '@auth/interfaces/user.interface';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '@auth/interfaces/auth-response.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';
const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>( localStorage.getItem('token') );

  private http = inject(HttpClient);

  checkStatusResource = rxResource({
    stream: () => this.checkStatus()
  });

  authStatus = computed(() => {
    if( this._authStatus() === 'checking' ) return 'checking';

    if( this._user()){
      return 'authenticated';
    }

    return 'unauthenticated';
  });

  user = computed<User|null>(() => this._user());

  token = computed<string|null>(() => this._token());

  isAdmin = computed<boolean>(() => this._user()?.roles.includes('admin') ?? false);

  login(email: string, password: string):Observable<boolean> {
    return this.http.post<AuthResponse>(`${ baseUrl }/auth/login`, { email, password })
      .pipe(
        map( (resp) => this.handleAuthSuccess(resp)),
        catchError( (err: any) => this.handleAuthError(err))
      );
  }

  register(email: string, fullName: string, password: string):Observable<boolean> {
    return this.http.post<AuthResponse>(`${ baseUrl }/auth/register`, { email, password, fullName })
      .pipe(
        map( (resp) => this.handleAuthSuccess(resp)),
        catchError( (err: any) => this.handleAuthError(err))
      );
  }

  checkStatus(): Observable<boolean> {

    const token = localStorage.getItem('token');
    if( !token ) {
      this.logout();
      return of(false);
    }

    return this.http.get<AuthResponse>(`${ baseUrl }/auth/check-status`, {
      // headers: {
      //   'Authorization': `Bearer ${ token }`
      // }
    }).pipe(
        map( (resp) => this.handleAuthSuccess(resp)),
        catchError( (err: any) => this.handleAuthError(err))
    );
  }

  logout() {
    this._user.set(null);
    this._token.set(null);
    this._authStatus.set('unauthenticated');

    localStorage.removeItem('token');
  }

  private handleAuthSuccess({ token, user }: AuthResponse) {
    this._user.set(user);
    this._authStatus.set('authenticated');
    this._token.set(token);

    localStorage.setItem('token', token);
    return true;
  }

  private handleAuthError( error: any) {
    // console.log(error.error.message);
    this.logout();
    return of(false);
  }

}
