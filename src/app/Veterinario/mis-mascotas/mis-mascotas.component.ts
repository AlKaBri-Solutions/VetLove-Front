import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/models/Mascota';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { MascotaService } from 'src/app/servicio/mascota.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrls: ['./mis-mascotas.component.css'],
})
export class MisMascotasComponent {
  mascotaList!: Mascota[];
  vetId1 = '';
  url: string = '';
  vet!: any;
  cliId1 = 1;
  cli!: any;
  filtro: string = '';
  @Input()
  tipoUsuario: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioMascota: MascotaService,
    private servicioVeterinario: VeterinarioService,
    private servicioCliente: ClienteService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (this.tipoUsuario === 'veterinario') {
        this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
        this.servicioMascota
          .getMascotasByVeterinarioId(Number(this.vetId1))
          .subscribe((mascotas) => {
            this.mascotaList = mascotas;
          });
        this.servicioVeterinario
          .getVeterinarioById(Number(this.vetId1))
          .subscribe((veterinario) => {
            this.vet = veterinario;
          });
      } else if (this.tipoUsuario === 'cliente') {
        this.cliId1 = Number(params.get('id'));
        this.servicioMascota
          .getMascotasByClienteId(Number(this.cliId1))
          .subscribe((mascotas) => {
            this.mascotaList = mascotas;
            console.log(mascotas)
          });
        this.servicioCliente
          .getClienteById(Number(this.cliId1))
          .subscribe((cli) => {
            this.cli = cli;
          });
      }
    });
    // if(this.tipoUsuario == 'cliente'){
    //   this.servicioCliente.clienteHome().subscribe(
    //     (data) => {
    //       console.log(data)
    //       this.cli = data
    //       this.servicioMascota.getMascotasByClienteId(Number(this.cli.id))
    //     .subscribe((mascotas) => {
    //       this.mascotaList = mascotas;
    //     });
    //     }
    //   )
    // }
  }

  confirmarEliminacion(id: number) {
    if (confirm('Seguro que desea cambiar el estado de la mascota?')) {
      this.servicioMascota.deleteMascota(id).subscribe(); //Cambiar en el back
      for (let i = 0; i < this.mascotaList.length; i++) {
        if (this.mascotaList[i].id == id) {
          this.mascotaList[i].estado = { id: 2, nombre: 'De baja' }; //Cambiar en el front
        }
      }
    }
  }

  confirmarAgregacion(id: number) {
    if (confirm('Seguro que desea cambiar el estado de la mascota?')) {
      this.servicioMascota.undeleteMascota(id).subscribe(); //Cambiar en el back
      for (let i = 0; i < this.mascotaList.length; i++) {
        if (this.mascotaList[i].id == id) {
          this.mascotaList[i].estado = { id: 1, nombre: 'Ingresado' }; //Cambiar en el front
        }
      }
    }
  }

  aplicarFiltro() {
    return this.mascotaList.filter(
      (mascota) =>
        mascota.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
        mascota.raza.toLowerCase().includes(this.filtro.toLowerCase()) ||
        mascota.edad
          .toString()
          .toLowerCase()
          .includes(this.filtro.toLowerCase()) ||
        mascota.estado.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
