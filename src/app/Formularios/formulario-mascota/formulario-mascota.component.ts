import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/models/Mascota';
import { ClienteService } from 'src/app/servicio/cliente.service';
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
    private servicioCliente: ClienteService
  ) { }

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
    dueno: {
      id: 0,
      nombre: '',
      correo: '',
      cedula: '',
      celular: '',
      veterinario: {
        idVeterinario: 0,
        cedula: '',
        nombre: '',
        contrasenia: '',
        fotoUrl: '',
        especialidad: {
          idEspecialidad: 1,
          nombre: 'General'
        },
        estado: {
          idEstado: 1,
          nombre: 'Activo'
        }
      }
    }
  };

  vetId1!: string;

  esActualizar: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
      if (this.router.url.split('?')[0] == '/veterinario/add-mascota') {
        this.esActualizar = false;
      }
      else {
        this.esActualizar = true;
        this.servicioMascota.getMascotaById(Number(this.router.url.split('idMascota=')[1].split('&')[0])).subscribe(mascota => {
          this.formMascota = mascota
        })
      }
    });

  }

  registrarMascota(mascotaForm: Mascota) {
    if (this.router.url.split('?')[0] == '/veterinario/add-mascota') {
      this.servicioCliente.getClienteByCedula(mascotaForm.dueno.cedula).subscribe(cliente => {
        if (cliente == null) {
          alert('El dueño no existe');
          this.router.navigate(['/veterinario/add-mascota'], { queryParams: { id: this.vetId1 } });
        }
        else {
          this.servicioMascota.saveMascota(mascotaForm).subscribe(mascota => {
            this.addMascotaEvent.emit(mascota);
            this.router.navigate(['/veterinario/mis-mascotas'], { queryParams: { id: this.vetId1 } });
          })
        }
      })
    }
    else {
      this.servicioMascota.updateMascota(mascotaForm).subscribe(mascota => {
        this.addMascotaEvent.emit(mascota);
        this.router.navigate(['/veterinario/mis-mascotas'], { queryParams: { id: this.vetId1 } });
      })
    }
  }
}
