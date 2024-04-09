import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute,
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

  vetId1!: string;

  esActualizar:boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
      console.log(this.router.url.split('?')[0])
      if(this.router.url.split('?')[0] == '/veterinario/add-mascota'){
        this.esActualizar = false;
      }
      else {
        this.esActualizar = true;
      }
    });

  }

  registrarMascota(mascotaForm: Mascota) {
    console.log("Entra")
    console.log(mascotaForm)
    this.servicioMascota.saveMascota(mascotaForm).subscribe(mascota => {
      this.addMascotaEvent.emit(mascota);
      this.router.navigate(['/veterinario/mis-mascotas?id=' + this.vetId1]);
    })
  }
}
