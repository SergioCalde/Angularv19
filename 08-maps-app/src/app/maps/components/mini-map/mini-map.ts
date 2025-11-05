import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl'; 
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.html',
  styles: `
  
    #mini-map {
      width: 100%;
      height: 260px;
      border-radius: 5px;
    }

  `
})
export class MiniMap implements AfterViewInit { 

  divElement = viewChild<ElementRef>('map');
  lngLat = input.required<LngLatLike>();
  zoom = input<number>(14);
  pitch = input<number>(50);

  async ngAfterViewInit() {

    if( !this.divElement()?.nativeElement ) return;

    await new Promise( (resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat(), // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
      interactive: false,
      pitch: this.pitch(),
    });

    const marker = new mapboxgl.Marker({
      draggable: false,
      color: '#1b4887',
    })
      .setLngLat(this.lngLat())
      .addTo(map);

  }
}
