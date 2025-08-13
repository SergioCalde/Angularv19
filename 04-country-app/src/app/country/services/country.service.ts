import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);




  searchByCapital( query: string ): Observable<Country[]> {
    const url = `${ API_URL }/capital/${ query }`;
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp) ),
        catchError( (err) => {
          return throwError( 
            () => new Error(`No countries found with capital: ${ query }`)
          );
        })
      )

  }

  searchByCountry( query: string ): Observable<Country[]> {
    const url = `${ API_URL }/name/${ query }`;
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp) ),
        delay(3000),
        catchError( (err) => {
          return throwError( 
            () => new Error(`No countries found with name: ${ query }`)
          );
        })
      )
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | undefined> {
    const url = `${ API_URL }/alpha/${ code }`;

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp) ),
        map( countries => countries.at(0)),
        catchError( (err) => {
          return throwError( 
            () => new Error(`No countries found with code: ${ code }`)
          );
        })
      )
  }

}
