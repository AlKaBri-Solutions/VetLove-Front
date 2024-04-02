import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.component.html',
  styleUrls: ['./formulario-mascota.component.css']
})
export class FormularioMascotaComponent {
  sendMascota!:Mascota;
  
  mascotaForm: any;

  addMascotaForm(){
    console.log(this.formStudent);
    this.sendStudent = Object.assign({}, this.formStudent); //Copia por valor, no por referencia

    this.addStudentEvent.emit(this.formStudent);
  }

  addMascota(form:any){
    console.log(form);
    this.sendStudent = Object.assign({}, this.formStudent); //Copia por valor, no por referencia

    this.addStudentEvent.emit(this.formStudent);
  }
}
