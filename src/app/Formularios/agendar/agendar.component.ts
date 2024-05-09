import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { Hora } from 'src/app/models/Hora';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/servicio/reserva.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent {
  constructor(
    private servicioReserva: ReservaService,
    private router: Router,
  ) { }

  fecha: Date = new Date();
  correo!: String;
  horario: Hora = {
    id: 0,
    horario: ""
  };

  reservasXDia!: Reserva[];

  mostrarPopup = false;
  mensajePopup: string = "";

  ngOnInit(): void {

  }

  async agendar(fecha: Date, correo: String, horario: Hora) {
    let fechaString = fecha.toString();
  
    try {
      const value = await this.servicioReserva.reservar(fechaString, horario.horario).toPromise();
  
      if (value == 1) {
        emailjs.init("Ci0wROnYKNEOpCFoW");
        const response = await emailjs.send("service_5j3tmmd", "template_lr12htb", {
          fecha: fechaString,
          correo: correo,
          horario: horario.horario,
        });
        this.abrirPopup("Reserva creada con éxito")
      } else if (value == -1) {
        this.abrirPopup("Oops, parece que este horario ya está reservado. Recarga la página e intenta otra vez")
      } else {
        this.abrirPopup("Error del sistema. Contáctate a nuestra línea de apoyo")
      }
    } catch (error) {
      // Handle any errors that occur during the asynchronous operations
    }
  }

  onChange(value: any) {
    console.log(this.fecha);
    this.servicioReserva.getDisponiblesByDia(this.fecha.toString()).subscribe(reservas => {
      console.log(reservas);
      console.log(this.fecha.toString());
      this.reservasXDia = reservas
    })
  }

  onChangeSelect(value: any) {
    console.log(this.horario);

  }

  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
    this.router.navigate(['/home']);
  }
}
