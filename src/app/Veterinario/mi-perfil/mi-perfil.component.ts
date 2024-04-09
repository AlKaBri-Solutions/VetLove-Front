import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/models/Veterinario';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  vetId1 = '';
  veterinario!: Veterinario;
  souruce = "https://cdn.nubika.es/wp-content/uploads/2022/07/funciones-veterinarios.jpg";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioVeterinario: VeterinarioService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
      this.servicioVeterinario.getVeterinarioById(Number(this.vetId1)).subscribe(veterinario => {
        this.veterinario = veterinario
      });
    });
  }
}
