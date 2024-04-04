import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/models/Mascota';
import { MascotaService } from 'src/app/servicio/mascota.service';

@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.component.html',
  styleUrls: ['./formulario-mascota.component.css']
})
export class FormularioMascotaComponent {
  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  constructor(
    private servicioMascota: MascotaService,
    private router: Router
  ) {}

  sendMascota!: Mascota;

  formMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    foto: '',
    edad: 0,
    peso: 0,
    estado: {
      id: 1,
      nombre: 'Ingresado'
    },
    };

  registrarMascota(mascotaForm: Mascota) {
    console.log("Entra")
    console.log(mascotaForm)
    this.servicioMascota.saveMascota(mascotaForm).subscribe(mascota => {
      this.addMascotaEvent.emit(mascota);
      this.router.navigate(['/veterinario']);
    })
  }
}
