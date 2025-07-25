import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { environment } from '@environments/environment';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
}

@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(false);
  private trendingPage = signal<number>(0);

  trendingGifGroup = computed<Gif[][]>( () => {
    const groups = [];
    for( let i = 0; i < this.trendingGifs().length; i += 3 ){
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    // console.log('Groups:', { groups });
    return groups;
  });

  searchHistory = signal<Record<string, Gif[]>>( loadFromLocalStorage() );
  searchHistoryKeys = computed( () => Object.keys(this.searchHistory()) );

  constructor() {
    this.loadTrendingGifs();
  }

  safeGifsToLocalStorage = effect( () => {
    localStorage.setItem(GIF_KEY, JSON.stringify(this.searchHistory()));
  })

  loadTrendingGifs() {

    if( this.trendingGifsLoading() ) return;

    this.trendingGifsLoading.set(true);


    this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: this.trendingPage() * 20,
      }
    })
    .subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray( resp.data );
      this.trendingGifs.update( currentGifs => [
        ...currentGifs,
        ...gifs,
      ]);
      this.trendingPage.update( (page) => page + 1 );
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


  getHistoryGifs( query: string ): Gif[] {
    return this.searchHistory()[query] ?? [];
  }


}
