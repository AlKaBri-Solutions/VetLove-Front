import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioCliente: ClienteService,
    private servicioVeterinario: VeterinarioService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
      this.servicioCliente.getClientesByVeterinarioId(Number(this.vetId1)).subscribe(clientes => {
        this.clientList = clientes;
      });
      this.servicioVeterinario.getVeterinarioById(Number(this.vetId1)).subscribe(veterinario => {
        this.vet = veterinario
      });
    });
  }
}
