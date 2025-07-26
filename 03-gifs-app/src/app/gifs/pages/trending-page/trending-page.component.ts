import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
// import { GifListComponent } from '@app/gifs/components/gif-list/gif-list.component';
import { GifsService } from '@app/gifs/services/gifs.service';
@Component({
  selector: 'app-trending-page',
  // imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {

  gifService = inject(GifsService);
  // gifs = computed( () => this.gifService.trendingGifs() );
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    // console.log(scrollDiv);
    if( !scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop; // distance from top
    const clientHeight = scrollDiv.clientHeight; // visible height
    const scrollHeight = scrollDiv.scrollHeight; // total height

    const isAtBotton = (scrollTop + clientHeight) + 300 >= scrollHeight;

    if( isAtBotton ){
      this.gifService.loadTrendingGifs();
    }


  }

}
