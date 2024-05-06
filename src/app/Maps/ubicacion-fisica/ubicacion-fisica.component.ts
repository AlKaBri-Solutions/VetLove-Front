import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ubicacion-fisica',
  templateUrl: './ubicacion-fisica.component.html',
  styleUrls: ['./ubicacion-fisica.component.css']
})
export class UbicacionFisicaComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}

  sede!: string

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.sede = this.router.url.split('sede=')[1].split('&')[0];
      if (this.sede == 'cedritos') {
        this.sede='Cedritos'
      }
  
      else if (this.sede == 'javeriana') {
        this.sede='Javeriana'
      }
  
      else if (this.sede == 'cali') {
        this.sede='Cali'
      }
  
      else{
        this.sede='Miami'
      }
    });
  }


}
