import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/models/Veterinario';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-mis-veterinarios',
  templateUrl: './mis-veterinarios.component.html',
  styleUrls: ['./mis-veterinarios.component.css']
})
export class MisVeterinariosComponent {
  veterinariosList!: Veterinario[];
  url:string = "";
  filtro: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioVeterinario: VeterinarioService,
  ) { }

  ngOnInit(): void {
    this.servicioVeterinario.getAllVeterinarios().subscribe(veterinarios => {
      this.veterinariosList = veterinarios;
    });
  }

  aplicarFiltro() {
    return this.veterinariosList.filter(veterinario =>
      veterinario.cedula.toLowerCase().includes(this.filtro.toLowerCase()) ||
      veterinario.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

}
