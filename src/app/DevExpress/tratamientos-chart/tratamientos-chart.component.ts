import { Component, HostListener } from '@angular/core';
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
  chartWidth: number = 650;
  chartHeight: number = 400;
  lineColor: string = "#000C4F"
  axisColor: string = "#FE761E"
  tickIntervalValue: number = 10; 


  constructor(
    private servicioTratamiento: TratamientosService,
   ) { }



  ngOnInit(): void{
    this.servicioTratamiento.getAllTratamientos().subscribe(tratData =>{
      this.tratamientos = tratData
      this.tratamientos.sort((a, b) => {
        return a.fechaFin.getTime() - b.fechaFin.getTime();
      });
    }
    )
    
  }

  ordenarTratamientosPorFecha(): void {
    this.tratamientos.sort((a, b) => {
      return a.fechaFin.getTime() - b.fechaFin.getTime();
    });
  }


}
