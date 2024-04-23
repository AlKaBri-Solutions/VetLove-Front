import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal-admin',
  templateUrl: './pagina-principal-admin.component.html',
  styleUrls: ['./pagina-principal-admin.component.css']
})
export class PaginaPrincipalAdminComponent {
  ruta: string = "/admin/dashboard";
  tipoUsuario: string = ""

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ruta = this.router.url.split('?')[0];
  }
}
