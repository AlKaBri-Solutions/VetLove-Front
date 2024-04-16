import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { Veterinario } from 'src/app/models/Veterinario';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  vetId1 = '';
  veterinario!: Veterinario;
  clienteId1 = '';
  cli!:Cliente
  souruce = "https://cdn.nubika.es/wp-content/uploads/2022/07/funciones-veterinarios.jpg";
  @Input() 
  tipoUsuario: string = "";
  mostrarPopup = false;
  mensajePopup: string = "";
  formCliente: Cliente = {
    id: 0,
    nombre: '',
    correo: '',
    celular: '',
    cedula: '',
    veterinario: {
      idVeterinario: 0,
      cedula: '',
      nombre: '',
      contrasenia: '',
      fotoUrl: '',
      especialidad: {
        idEspecialidad: 0,
        nombre: ''
      }
    }
  }


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioVeterinario: VeterinarioService,
    private servicioCliente: ClienteService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(this.tipoUsuario === 'veterinario'){
        this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
        this.servicioVeterinario.getVeterinarioById(Number(this.vetId1)).subscribe(veterinario => {
          this.veterinario = veterinario
          console.log(this.veterinario)
        });
      }else if(this.tipoUsuario === 'cliente'){
        this.clienteId1 = this.router.url.split('id=')[1].split('&')[0];
        this.servicioCliente.getClienteById(Number(this.clienteId1)).subscribe(cli => {
          this.cli = cli
        });
      }
    });
  }



  actualizarCliente(cliente: Cliente){
        this.servicioCliente.updateCliente(cliente).subscribe(cli => {
          cliente = cli
          this.abrirPopup("Tu información ha sido actualizado con exito");
        });
  }

  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }

}
