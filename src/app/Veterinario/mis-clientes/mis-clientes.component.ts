import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-mis-clientes',
  templateUrl: './mis-clientes.component.html',
  styleUrls: ['./mis-clientes.component.css']
})
export class MisClientesComponent {
  clientList!: Cliente[];
  vetId1 = '';
  url:string = "";
  vet!:any;
  filtro: string = '';

  mostrarPopup = false;
  mensajePopup: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioCliente: ClienteService,
    private servicioVeterinario: VeterinarioService,
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
    //   this.servicioCliente.getClientesByVeterinarioId(Number(this.vetId1)).subscribe(clientes => {
    //     this.clientList = clientes;
    //   });
    //   this.servicioVeterinario.getVeterinarioById(Number(this.vetId1)).subscribe(veterinario => {
    //     this.vet = veterinario
    //     this.vetId1 = this.vet.idVeterinario.toString();
    //   });
    // });

    this.servicioVeterinario.veterinarioHome()
        .pipe(
          mergeMap((veterinario) => {
            console.log(veterinario);
            
            this.vet = veterinario;
            return this.servicioCliente.getClientesByVeterinarioId(veterinario.idVeterinario);
          })
        )
        .subscribe((clientes) => {
          this.clientList = clientes
        })
  }

  aplicarFiltro() {
    return this.clientList.filter(cliente =>
      cliente.cedula.toLowerCase().includes(this.filtro.toLowerCase()) ||
      cliente.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
      cliente.correo.toLowerCase().includes(this.filtro.toLowerCase()) ||
      cliente.celular.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  confirmarEliminacion(id: number) {
    if(confirm('¿Esta seguro de eliminar este cliente?')){
      this.servicioCliente.deleteCliente(id).pipe(
        mergeMap(() => {
          return this.servicioCliente.getClientesByVeterinarioId(Number(this.vetId1));
        }),
        map((clientes: any) => {
          return this.clientList = clientes
        })
      ).subscribe()
    }
    else {

    }
  }

  
  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }
}
