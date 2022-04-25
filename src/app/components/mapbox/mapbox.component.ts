import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 48.640853957259516;
  lng = 9.015342233478862;

  constructor() {}

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiaGVpbGlnZXJodWVnZWwiLCJhIjoiY2t5YTJpeDIyMDFjNjJ1bGlkeng0YzFmMyJ9.L5F2jpTCLJpuwVhg81rQDA',
      container: 'map',
      style: this.style,
      zoom: 3,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
