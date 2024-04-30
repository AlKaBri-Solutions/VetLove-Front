import { Component } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  //@ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  slideNext(){
    //this.swiper.swi
  }



  constructor() {
   }

  ngAfterViewInit(): void {
    // Inicialización de Swiper después de que la vista del componente se haya inicializado


  }

}
