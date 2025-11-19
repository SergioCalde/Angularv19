import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import { environment } from '../../../environments/environment';

import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { v4 as uuidV4 } from 'uuid';

mapboxgl.accessToken = environment.mapboxKey;

interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
}

@Component({
  selector: 'app-markers-page',
  imports: [],
  templateUrl: './markers-page.html',
})
export class MarkersPage implements AfterViewInit{

  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map|null>(null);
  markers = signal<Marker[]>([]);

  
  ngAfterViewInit(): void {
    if( !this.divElement()?.nativeElement ) return;

    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [ -84.0573 , 9.900 ], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    // const marker = new mapboxgl.Marker({
    //   draggable: false,
    //   color: '#1b4887',
    // })
    //   .setLngLat([ -84.0573 , 9.900 ])
    //   .addTo(map);
    
    // marker.on('dragend', (event) => {
    //   console.log('dragend', event);
    // });

    this.mapListeners( map );
  } 

  mapListeners( map: mapboxgl.Map ) {
    
    map.on('click', (event) => this.mapClick(event));

    this.map.set(map);
  }

  mapClick( event: mapboxgl.MapMouseEvent ) {

    if( !this.map() ) return;

    const coords = event.lngLat;
    
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const mapboxMarker = new mapboxgl.Marker({
      color,
    })
      .setLngLat( coords )
      .addTo( this.map()! );

    const newMarker: Marker = {
      id: uuidV4(),
      mapboxMarker: mapboxMarker
    }

    // this.markers.set([ newMarker, ...this.markers() ]);
    this.markers.update( markers => [ newMarker, ...markers ] );

  }

    flyToMarker( lngLat: LngLatLike ) {
      if( !this.map() ) return;

      this.map()?.flyTo({ 
        center: lngLat 
      });
    }

    deleteMarker( marker: Marker ) {
      if( !this.map() ) return;

      const map = this.map()!;
    
      marker.mapboxMarker.remove();

      this.markers.update( markers => markers.filter( m => m.id !== marker.id ) );

    }
}
