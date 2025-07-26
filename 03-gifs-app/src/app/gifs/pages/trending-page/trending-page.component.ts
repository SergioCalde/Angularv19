import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
// import { GifListComponent } from '@app/gifs/components/gif-list/gif-list.component';
import { GifsService } from '@app/gifs/services/gifs.service';
import { ScrollStateService } from '@app/shared/services/scroll-state.service';
@Component({
  selector: 'app-trending-page',
  // imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit{

  gifService = inject(GifsService);
  scrollStateService = inject(ScrollStateService);
  // gifs = computed( () => this.gifService.trendingGifs() );
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if( !scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    // console.log(scrollDiv);
    if( !scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop; // distance from top
    const clientHeight = scrollDiv.clientHeight; // visible height
    const scrollHeight = scrollDiv.scrollHeight; // total height

    const isAtBotton = (scrollTop + clientHeight) + 300 >= scrollHeight;

    this.scrollStateService.setTrendingScrollState(scrollTop);

    if( isAtBotton ){
      this.gifService.loadTrendingGifs();
    }


  }

}
