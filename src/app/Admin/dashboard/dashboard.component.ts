import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { EstadoVet } from 'src/app/models/EstadoVet';
import { Mascota } from 'src/app/models/Mascota';
import { Medicamento } from 'src/app/models/Medicamento';
import { TratamientoXMedicamento } from 'src/app/models/TratamientoXMedicamento';
import { Veterinario } from 'src/app/models/Veterinario';
import { MascotaService } from 'src/app/servicio/mascota.service';
import { MedicamentoService } from 'src/app/servicio/medicamento.service';
import { TratamientosService } from 'src/app/servicio/tratamientos.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  mascotasTot: Number | null = null
  mascotasAct: Number | null = null
  vetActivos: Number | null = null
  vetInactivos: Number | null = null
  atenReal: Number | null = null
  currentDateTime: String | null = null
  ventasTot: Number | null = null
  ventasTotRound: string | null = null
  gananciasTot: Number | null = null
  gananciasTotRound: string | null = null
  topVendidos: { nombre: string; top: number; imagen: string }[] = [];
  vets:{estado: string; cantidad: number}[] = []
  todosVets:Veterinario[] = []
  cont1: number = 0 
  cont2: number = 0 
  cont3: number = 0 
  cont4: number = 0
  medXenfer: TratamientoXMedicamento[] = []


  constructor(
    private servicioTratamiento: TratamientosService,
    private servicioVeterinario: VeterinarioService,
    private servicioMascota: MascotaService,
    private servicioMedicamento: MedicamentoService,
    public datepipe: DatePipe
   ) {
    this.currentDateTime =this.datepipe.transform((new Date));
   }

   pointClickHandler(e: { target: any; }) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e: { target: any; component: { getAllSeries: () => { getPointsByArg: (arg0: any) => any[]; }[]; }; }) {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item: { isVisible: () => any; hide: () => void; show: () => void; }) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }

  ngOnInit():void{
    this.servicioMascota.countAll().subscribe(mascData =>{
      this.mascotasTot = mascData
    }
    )

    this.servicioMascota.countActivas().subscribe(mascData =>{
      this.mascotasAct = mascData
    }
    )

    this.servicioTratamiento.countTratamientosLastMonth().subscribe(tratData =>{
      this.atenReal = tratData
    }
    )

    this.servicioMedicamento.getVentasTotales().subscribe(venData =>{
      this.ventasTot = venData
      this.ventasTotRound = this.ventasTot.toFixed(3)
    }
    )

    this.servicioMedicamento.getGananciasTotales().subscribe(gananData =>{
      this.gananciasTot = gananData
      this.gananciasTotRound = this.gananciasTot.toFixed(3)
    }
    )

    this.servicioMedicamento.getTopVendidos().subscribe(top =>{
      const nuevaLista = top.map((medicamento, index) => ({
        nombre: medicamento.nombre,
        top: [1, 3, 2][index % 3],
        imagen: ["https://cdn-icons-png.flaticon.com/512/4692/4692911.png","https://cdn-icons-png.flaticon.com/512/4692/4692905.png","https://cdn-icons-png.flaticon.com/512/4692/4692913.png"][index % 3]
      }));

      this.topVendidos = nuevaLista
    })

    this.servicioVeterinario.getAllVeterinarios().subscribe(vetData =>{
      for(const i in vetData){
        if(vetData[i].estado.idEstado == 1){
          this.cont1 = this.cont1 + 1
        }
        else if(vetData[i].estado.idEstado == 2){
          this.cont2 = this.cont2 + 1
        }
        else if(vetData[i].estado.idEstado == 3){
          this.cont3 = this.cont3 + 1
        }else{
          this.cont4 = this.cont4 + 1
        } 
      }

      const aux = [
        {
        estado: "Activo",
        cantidad: this.cont1
        },
        {
          estado: "Inactivo",
          cantidad: this.cont2
        },
        {
          estado: "Vacaciones",
          cantidad: this.cont3
          },
          {
            estado: "Incapacitado",
            cantidad: this.cont4
          }
      ]
      this.vets = aux
    }
    )

    this.servicioVeterinario.countVeterinariosInactivos().subscribe(vetData =>{
      this.vetInactivos = vetData
    }
    )

    this.servicioMedicamento.countMedicamentoXEnfermedadLastMonth().subscribe(enfData =>{
      this.medXenfer = enfData.slice(0, 5)
      console.log(this.medXenfer)
    }
    )
    


  }
  


}
