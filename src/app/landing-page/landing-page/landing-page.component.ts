import { Component } from '@angular/core';
import { ChatService } from 'src/app/servicio/chat.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  //@ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  slideNext(){
    //this.swiper.swi
  }

  mostrarDivFlotante: boolean = false;
  mensajes: { tipo: string, contenido: string }[] = []; // Array para almacenar mensajes entrantes y salientes
  mensajeSaliente: string = ''; // Variable para almacenar el mensaje que el usuario escribe

  toggleDivFlotante() {
    this.mostrarDivFlotante = !this.mostrarDivFlotante;
  }



  constructor(private chatService: ChatService) {
    
   }

  ngAfterViewInit(): void {
    // Inicialización de Swiper después de que la vista del componente se haya inicializado
  }

  enviarMensaje(){
    this.chatService.chatResponse(this.mensajeSaliente).subscribe(respuesta => {
      // Agregar el mensaje saliente al array de mensajes
      this.mensajes.push({ tipo: 'outgoing', contenido: this.mensajeSaliente });
      // Agregar el mensaje entrante al array de mensajes
      this.mensajes.push({ tipo: 'incoming', contenido: respuesta.response });
      // Limpiar el campo de mensaje saliente después de enviar
      this.mensajeSaliente = '';
    });
  }

}
