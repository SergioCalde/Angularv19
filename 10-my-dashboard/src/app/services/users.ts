import { environment } from '@/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { UserData, UserResponse, UsersResponse } from '@interfaces/request-response';
import { delay, map, Observable } from 'rxjs';


interface State {
  users: UserData[];
  loading: boolean;
}

const apiurl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );

  #state = signal<State>({
    loading: true,
    users: []
  })

  users = computed( () => this.#state().users );
  loading = computed( () => this.#state().loading );

  // constructor() {

  //   const headers = new HttpHeaders({
  //     'x-api-key': environment.APIKEY
  //   })

  //   this.http.get<UsersResponse>(`${apiurl}/users`, { headers })
  //     .pipe( delay(1500) )
  //     .subscribe( res => {

  //       this.#state.set({
  //         loading: false,
  //         users: res.data,
  //       })

  //     })

  // }

  getUsers(): Observable<UserData[]> {
    // const headers = new HttpHeaders({
    //   'x-api-key': environment.APIKEY
    // })

    return this.http.get<UsersResponse>(`${apiurl}/users`)
      .pipe(
        delay(500),
        map( res => res.data )
      )
  }

  getUserById(id: string) {
    return this.http.get<UserResponse>(`${apiurl}/users/${id}`)
      .pipe(
        delay(500),
        map( res => res.data )
      )
  }

}
