import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MascotaService } from 'src/app/servicio/mascota.service';
import { TratamientosService } from 'src/app/servicio/tratamientos.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  mascotasTrat: Number | null = null
  atenReal: Number | null = null
  currentDateTime: String | null = null


  constructor(
    private servicioTratamiento: TratamientosService,
    private servicioVeterinario: VeterinarioService,
    private servicioMascota: MascotaService,
    public datepipe: DatePipe
   ) {
    this.currentDateTime =this.datepipe.transform((new Date));
   }

  ngOnInit():void{
    this.servicioTratamiento.countActivos().subscribe(tratData =>{
      this.mascotasTrat = tratData
    }
    )

    this.servicioTratamiento.countRealizados().subscribe(tratData =>{
      this.atenReal = tratData
    }
    )

  }


}
