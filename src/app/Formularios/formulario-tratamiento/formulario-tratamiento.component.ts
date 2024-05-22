import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enfermedad } from 'src/app/models/Enfermedad';
import { TratamientoRequest } from 'src/app/models/TratamientoRequest';
import { Veterinario } from 'src/app/models/Veterinario';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { EnfermedadService } from 'src/app/servicio/enfermedad.service';
import { MascotaService } from 'src/app/servicio/mascota.service';
import { TratamientosService } from 'src/app/servicio/tratamientos.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

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
    private servicioVeterinario: VeterinarioService,
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

  vet!: Veterinario;

  mostrarPopup = false;
  mensajePopup: string = "";

  vetId1!: string;
  enfermedades!: Enfermedad[];
  mascota!: string;

  ngOnInit(): void {
    this.servicioVeterinario.veterinarioHome().subscribe(veterinario => {
      this.vet = veterinario;
    })
    this.servicioEnfermedad.getAllEnfermedades().subscribe(enfermedades => {
      this.enfermedades = enfermedades
    })

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
      if(number == 1) {
        this.router.navigate(['/veterinario/home/mis-tratamientos']);
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
