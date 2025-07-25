import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

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
        map( ({ data }) => GifMapper.mapGiphyItemsToGifArray(data) )
      );


    // .subscribe( (resp) => {
    //   const gifs = GifMapper.mapGiphyItemsToGifArray( resp.data );
    //   console.log('Search:',{ gifs });
    // })

  }


}
