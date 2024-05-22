import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { UserCliente } from 'src/app/models/UserCliente';
import { Veterinario } from 'src/app/models/Veterinario';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-pagina-principal-login',
  templateUrl: './pagina-principal-login.component.html',
  styleUrls: ['./pagina-principal-login.component.css']
})
export class PaginaPrincipalLoginComponent {
  vet: Veterinario  | null = null;
  txtCedulaVet = '';
  txtPasswordVet:string = "";
  cliente: Cliente  | null = null;
  txtCedulaCliente = '';
  mostrarPopup = false;
  mensajePopup: string = "";

  formUserCliente: UserCliente = {
    cedula: '',
    password: '',
  };

  constructor(
    private servicioVeterinario: VeterinarioService,
    private servicioCliente: ClienteService,
    private router: Router
  ) { }


  // validarLoginCliente(){

  //   console.log(this.txtCedulaCliente);
    
  //   this.servicioCliente.getClienteByCedula(this.txtCedulaCliente).subscribe({
  //     next: (clienteInfo:any) => {
  //       if(clienteInfo != null){
  //         this.cliente = clienteInfo
  //         window.location.href = "cliente/mis-mascotas?id=" + this.cliente!.id
  //       }else{
  //         this.cliente = null
  //         this.abrirPopup("La cedula ingresada es incorrecta"); 
  //       }
  //     }
  //   })
  // }

  validarLoginCliente(form: any){
    this.servicioCliente.login(this.formUserCliente).subscribe(
      (data) => {
        console.log(data);
        
        localStorage.setItem('token',String(data));
        console.log("TOKEN:" + localStorage.getItem('token'));
        
        this.router.navigate(['/cliente/home/mis-mascotas'])
      }
    )
  }

  validarLoginVeterinario(){
    this.servicioVeterinario.getVeterinarioByCedula(this.txtCedulaVet).subscribe({
      next: (veterinario:any) => {
        if(veterinario != null){
          this.vet = veterinario
          if(this.txtPasswordVet == this.vet!.contrasenia)
          {
              window.location.href = "veterinario/mis-mascotas?id=" + this.vet!.idVeterinario
          }else{
            this.abrirPopup("La cedula ingresada o la contraseña son incorrectas");
          }  
        }else{
          this.vet = null
          this.abrirPopup("La cedula ingresada o la contraseña son incorrectas"); 
        }
      }
    })
  }


  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }

}
