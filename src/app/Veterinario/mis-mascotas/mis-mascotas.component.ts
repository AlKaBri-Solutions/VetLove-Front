import { Component } from '@angular/core';
import { Mascota } from './Mascota';

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrls: ['./mis-mascotas.component.css']
})
export class MisMascotasComponent {

  //DATOS QUEMADOS DE LA BASE DE DATOS
  mascotaList: Mascota[] = [
    {
      id: 1,
      nombre: 'Iris',
      raza: 'Husky',
      edad: 3,
      peso: 29,
      nombreEstado: 'baja',
      foto: 'https://t2.uc.ltmcdn.com/es/posts/4/6/5/como_saber_si_mi_husky_es_puro_50564_600.jpg',
    }
  ]

}
