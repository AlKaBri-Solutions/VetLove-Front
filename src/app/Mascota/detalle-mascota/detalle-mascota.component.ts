import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/models/Mascota';
import { Tratamiento } from 'src/app/models/Tratamiento';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { MascotaService } from 'src/app/servicio/mascota.service';
import { TratamientosService } from 'src/app/servicio/tratamientos.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent {
  petId1 = '';
  mascota!: Mascota;
  cliId1 = '';
  tratamientoList!: Tratamiento[];
  tratamiento!: Tratamiento;
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioVeterinario: VeterinarioService,
    private servicioCliente: ClienteService,
    private servicioMascota: MascotaService,
    private servicioTratamiento: TratamientosService,
  ) { }
  
  ngOnInit(): void {
    this.petId1 = this.router.url.split('id=')[1].split('&')[0];
        this.servicioMascota.getMascotaById(Number(this.petId1)).subscribe(mascota => {
          this.mascota = mascota
          this.cliId1 = String(this.mascota.dueno.id)
          console.log(this.mascota)
        });
        this.servicioTratamiento.getTratamientosByMascotaId(Number(this.petId1)).subscribe(tratData => {
          this.tratamientoList = tratData;
          this.tratamiento = this.tratamientoList[0];
        })
  }

  goBack(): void {
    this.router.navigate(['../']);
  }
}
