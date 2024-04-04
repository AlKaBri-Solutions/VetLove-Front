import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal-veterinario',
  templateUrl: './pagina-principal-veterinario.component.html',
  styleUrls: ['./pagina-principal-veterinario.component.css']
})
export class PaginaPrincipalVeterinarioComponent {
  ruta: string = "/veterinario/mis-mascotas";
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ruta = this.router.url
  }

}
