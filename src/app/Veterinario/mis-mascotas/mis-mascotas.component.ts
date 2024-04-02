import { Component } from '@angular/core';
import { Mascota } from '../../models/Mascota';

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
      estado: 'baja',
      foto: 'https://t2.uc.ltmcdn.com/es/posts/4/6/5/como_saber_si_mi_husky_es_puro_50564_600.jpg'
    },
    {
      id: 2,
      nombre: 'Bela',
      raza: 'Samoyedo',
      edad: 5,
      peso: 32,
      estado: 'baja',
      foto: 'https://t2.uc.ltmcdn.com/es/posts/4/6/5/como_saber_si_mi_husky_es_puro_50564_600.jpg'
    },
    {
      id: 3,
      nombre: 'Max',
      raza: 'Samoyedo',
      edad: 4,
      peso: 40,
      estado: 'baja',
      foto: 'https://t2.uc.ltmcdn.com/es/posts/4/6/5/como_saber_si_mi_husky_es_puro_50564_600.jpg'
    },
    {
      id: 4,
      nombre: 'Enzo',
      raza: 'Golden',
      edad: 6,
      peso: 35,
      estado: 'baja',
      foto: 'https://t2.uc.ltmcdn.com/es/posts/4/6/5/como_saber_si_mi_husky_es_puro_50564_600.jpg'
    },
    {
      id: 5,
      nombre: 'Polar',
      raza: 'Husky',
      edad: 2,
      peso: 28,
      estado: 'baja',
      foto: 'https://t2.uc.ltmcdn.com/es/posts/4/6/5/como_saber_si_mi_husky_es_puro_50564_600.jpg'
    }
    
  ]

}
