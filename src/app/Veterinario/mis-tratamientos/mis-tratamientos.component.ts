import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, map, mergeMap } from 'rxjs';
import { Tratamiento } from 'src/app/models/Tratamiento';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { MascotaService } from 'src/app/servicio/mascota.service';
import { TratamientosService } from 'src/app/servicio/tratamientos.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-mis-tratamientos',
  templateUrl: './mis-tratamientos.component.html',
  styleUrls: ['./mis-tratamientos.component.css']
})
export class MisTratamientosComponent {
  tratamientoList!: Tratamiento[];
  vetId1 = '';
  vet!: any;
  traId1 = '';
  tra!: any;
  filtro: string = '';
  @Input()
  tipoUsuario: string = '';

  mostrarPopup = false;
  mensajePopup: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioMascota: MascotaService,
    private servicioVeterinario: VeterinarioService,
    private servicioCliente: ClienteService,
    private servicioTratamiento: TratamientosService
  ) {}
  ngOnInit(): void {
    this.servicioVeterinario.veterinarioHome()
        .pipe(
          mergeMap((veterinario) => {
            console.log(veterinario);
            
            this.vet = veterinario;
            console.log(this.vet);
            
            return this.servicioTratamiento.getTratamientosByVeterinarioId(veterinario.idVeterinario);
          })
        )
        .subscribe((tratamientos) => {
          this.tratamientoList = tratamientos
        })
  }
  aplicarFiltro() {
    return this.tratamientoList.filter(tratamiento =>
      tratamiento.mascota.nombre.toString().toLowerCase().includes(this.filtro.toLowerCase()) ||
      tratamiento.medicamento.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }

  aplicarMedicamento(tratamiento: Tratamiento) {
    
    this.servicioTratamiento.aplicarMedicamento(tratamiento).pipe(
      mergeMap((result) => {
        if (result < 0) {
          this.abrirPopup("Unidades insuficientes. Cambie el medicamento y vuelva a intentar");
          return EMPTY
        }
        else {
          console.log(this.vet.id);
          console.log(this.vet);
          
          return this.servicioTratamiento.getTratamientosByVeterinarioId(Number(this.vet.idVeterinario));
        }
      }),
      map((tratamientos: any) => {
        this.tratamientoList = tratamientos

      })
    ).subscribe()
  }

  cambiarMedicamento(tratamiento: Tratamiento) {
    this.servicioTratamiento.cambiarMedicamento(tratamiento).pipe(
      mergeMap((result) => {
        if (result < 0) {
          this.abrirPopup("No hay medicamentos para la enfermedad a tratar. Comuníquese con el adminsitrador");
          return EMPTY
        }
        else {
          console.log(this.vet.id);
          
          return this.servicioTratamiento.getTratamientosByVeterinarioId(Number(this.vet.idVeterinario));
        }
      }),
      map((tratamientos: any) => {
        this.tratamientoList = tratamientos

      })
    ).subscribe()
  }
}