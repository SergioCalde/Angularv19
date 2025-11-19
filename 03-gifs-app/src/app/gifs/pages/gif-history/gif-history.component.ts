import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsService } from '@app/gifs/services/gifs.service';
import { GifListComponent } from '@app/gifs/components/gif-list/gif-list.component';

@Component({
  selector: 'app-gif-history',
  imports: [ GifListComponent ],
  templateUrl: './gif-history.component.html'
})
export default class GifHistoryComponent {

  // query = inject(ActivatedRoute).params.subscribe( (params) => {
  //   console.log(params['query']);
  // });

  gifService = inject(GifsService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map( params => params['query'] )
    ));

  gifsByKey = computed( () => {
    return this.gifService.getHistoryGifs(this.query());
  });


}
