import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enfermedad } from 'src/app/models/Enfermedad';
import { TratamientoRequest } from 'src/app/models/TratamientoRequest';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { EnfermedadService } from 'src/app/servicio/enfermedad.service';
import { MascotaService } from 'src/app/servicio/mascota.service';
import { TratamientosService } from 'src/app/servicio/tratamientos.service';

@Component({
  selector: 'app-formulario-tratamiento',
  templateUrl: './formulario-tratamiento.component.html',
  styleUrls: ['./formulario-tratamiento.component.css']
})
export class FormularioTratamientoComponent {
  @Output()
  addTratamientoEvent = new EventEmitter<TratamientoRequest>();

  constructor(
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute,
    private servicioCliente: ClienteService,
    private servicioEnfermedad: EnfermedadService,
    private servicioTratamiento: TratamientosService,
  ) { }

  sendTratamiento!: TratamientoRequest;

  formTratamiento: TratamientoRequest = {
    cedula: '',
    nombre: '',
    duracion: 0,
    enfermedad: {
      idEnfermedad: 4,
      nombre: "Dermatitis",
      prioridad: {
        idPrioridad: 1,
        nombre: "Baja"
      }
    }
  }

  mostrarPopup = false;
  mensajePopup: string = "";

  vetId1!: string;
  enfermedades!: Enfermedad[];
  mascota!: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
      this.mascota = this.router.url.split('id=')[1].split('&')[1];

      if (this.mascota != null) {
        this.servicioMascota.getMascotaById(Number(this.router.url.split('mascotaId=')[1].split('&')[0])).subscribe(mascota => {
          this.formTratamiento.cedula = mascota.dueno.cedula;
          this.formTratamiento.nombre = mascota.nombre;
        })
        this.servicioEnfermedad.getAllEnfermedades().subscribe(enfermedades => {
          this.enfermedades = enfermedades
        });
      }
      else {
        this.servicioEnfermedad.getAllEnfermedades().subscribe(enfermedades => {
          this.enfermedades = enfermedades
        });
      }
    });

  }

  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }

  registrarTratamiento(tratamientoForm: TratamientoRequest) {
    this.servicioTratamiento.saveTratamiento(tratamientoForm).subscribe(number => {
      console.log(number)
      if(number == 1) {
        this.router.navigate(['/veterinario/mis-tratamientos'], { queryParams: { id: this.vetId1 } });
      }
      else if (number == -1){
        this.abrirPopup("No existe una mascota con nombre " + this.formTratamiento.nombre + " asociada al dueño con cédula " + this.formTratamiento.cedula);
      }
      else {
        this.abrirPopup("No existe un cliente con cédula " + this.formTratamiento.cedula);
      }
    })
  }
}
