import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '@app/gifs/components/gif-list/gif-list.component';
import { Gif } from '@app/gifs/interfaces/gif.interface';
import { GifsService } from '@app/gifs/services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [ GifListComponent ],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {

  gifService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch( query: string ) {
    this.gifService.searchGifs(query);
  }

}
