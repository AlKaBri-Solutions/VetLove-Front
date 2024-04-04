import { Component } from '@angular/core';
import Swiper from 'swiper';


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


  constructor() { }

  ngAfterViewInit(): void {
    // Inicialización de Swiper después de que la vista del componente se haya inicializado




    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 80,
      speed: 800,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
