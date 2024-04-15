import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/models/Veterinario';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-pagina-principal-login',
  templateUrl: './pagina-principal-login.component.html',
  styleUrls: ['./pagina-principal-login.component.css']
})
export class PaginaPrincipalLoginComponent {
  vetId1:number | null = null;
  vet: Veterinario  | null = null;
  txtCedula = '';
  txtPassword:string = "";  
  mostrarPopup = false;
  mensajePopup: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioVeterinario: VeterinarioService,
  ) { }

  validarLoginVeterinario(){
    console.log(this.txtCedula)
    this.servicioVeterinario.getVeterinarioByCedula(this.txtCedula).subscribe({
      next: (veterinario:any) => {
        if(veterinario != null){
          console.log("ENTRO BIEN")
          this.vet = veterinario
          console.log(this.vet)
          if(this.txtPassword == this.vet!.contrasenia)
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
