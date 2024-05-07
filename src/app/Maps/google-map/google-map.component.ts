import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-google-map',
  template: `
    <div #mapContainer style="height: 400px; width: 60vw; border-radius: 60px;"></div>
  `,
  styles: []
})
export class GoogleMapComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}

  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  map!: google.maps.Map;

  lat: number = 4.723487;
  lng: number = -74.048120;
  sede!: string;

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.route.paramMap.subscribe(params => {
      this.sede = this.router.url.split('sede=')[1].split('&')[0];
      if (this.sede == 'cedritos') {
        const mapOptions = {
          center: new google.maps.LatLng(4.723487, -74.048120),
          zoom: 18
        };
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(4.723487, -74.048120),
          map: this.map,
          title: 'Sede cedritos'
        });
      }

      else if (this.sede == 'javeriana') {
        const mapOptions = {
          center: new google.maps.LatLng(4.627394, -74.065625),
          zoom: 18
        };
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(4.627394, -74.065625),
          map: this.map,
          title: 'Sede javeriana'
        });
      }

      else if (this.sede == 'cali') {
        const mapOptions = {
          center: new google.maps.LatLng(3.3643889, -76.535444),
          zoom: 18
        };
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(3.3643889, -76.535444),
          map: this.map,
          title: 'Sede Cali'
        });
      }

      else{
        const mapOptions = {
          center: new google.maps.LatLng(25.746482, -80.368405),
          zoom: 18
        };
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(25.746482, -80.368405),
          map: this.map,
          title: 'Sede Miami'
        });
      }
    });

    
  }
}