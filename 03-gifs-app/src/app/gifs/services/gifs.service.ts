import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed( () => Object.keys(this.searchHistory()) );

  constructor() {
    this.loadTrendingGifs();
  }


  loadTrendingGifs() {

    this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
      }
    })
    .subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray( resp.data );
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
    })

  }

  searchGifs( query: string ): Observable<Gif[]> {

    return this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`,{
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map( ({ data }) => GifMapper.mapGiphyItemsToGifArray(data) ),
        tap( items => {
          this.searchHistory.update( history => ({
            ...history,
            [query.toLowerCase()]: items,
          }));
        })
      );


    // .subscribe( (resp) => {
    //   const gifs = GifMapper.mapGiphyItemsToGifArray( resp.data );
    //   console.log('Search:',{ gifs });
    // })

  }


}
