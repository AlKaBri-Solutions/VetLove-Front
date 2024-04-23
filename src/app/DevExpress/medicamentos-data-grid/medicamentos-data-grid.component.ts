import { Component} from '@angular/core';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Medicamento } from 'src/app/models/Medicamento';
import { MedicamentoService } from 'src/app/servicio/medicamento.service';



@Component({
  selector: 'app-medicamentos-data-grid',
  templateUrl: './medicamentos-data-grid.component.html',
  styleUrls: ['./medicamentos-data-grid.component.css']
})
export class MedicamentosDataGridComponent {
  medicamentos!: Medicamento[]; 
  types: string[] = ['spline', 'stackedspline', 'fullstackedspline'];
  collapsed = false;

  contentReady = (e: DxDataGridTypes.ContentReadyEvent) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };


  

  customizeTooltip = ({ originalValue }: Record<string, string>) => ({ text: `${parseInt(originalValue)}%` });

  constructor(
   private servicioMedicamento: MedicamentoService,
  ) { }

  ngOnInit(): void {
    this.servicioMedicamento.getAllMedicamentos().subscribe(medData =>{
      this.medicamentos = medData
    }
    )
  }
}

