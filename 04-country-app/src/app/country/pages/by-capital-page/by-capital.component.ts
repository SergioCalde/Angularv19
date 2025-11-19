import { Component, inject, linkedSignal, signal } from '@angular/core'; //resource
import { catchError, firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { RESTCountry } from '../../interfaces/rest-countries.interfaces';
// import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital.component.html',
})
export class ByCapitalPageComponent { 

  countryService = inject(CountryService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  
  query = linkedSignal(() =>this.queryParam);



  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if( !params.query ) return of([]);

      this.router.navigate(['/country/by-capital'], {
        queryParams: { query: params.query }
      });

      return this.countryService.searchByCapital(params.query)
      // .pipe(
        
      //   catchError( err => {

      //     console.log(err);

      //     return of([]);

      //   })

      // )
    },

  });
  

}
