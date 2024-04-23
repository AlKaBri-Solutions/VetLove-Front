import { Component } from '@angular/core';
import { Tratamiento } from 'src/app/models/Tratamiento';
import { TratamientosService } from 'src/app/servicio/tratamientos.service';

@Component({
  selector: 'app-tratamientos-chart',
  templateUrl: './tratamientos-chart.component.html',
  styleUrls: ['./tratamientos-chart.component.css']
})
export class TratamientosChartComponent {
  tratamientos!: Tratamiento[];
   types: string[] = ['spline', 'stackedspline', 'fullstackedspline'];

  constructor(
    private servicioTratamiento: TratamientosService,
   ) { }

  ngOnInit(): void{
    this.servicioTratamiento.getAllTratamientos().subscribe(tratData =>{
      this.tratamientos = tratData
    }
    )

  }
}
