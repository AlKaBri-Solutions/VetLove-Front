import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/models/Mascota';
import { MascotaService } from 'src/app/servicio/mascota.service';

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrls: ['./mis-mascotas.component.css']
})
export class MisMascotasComponent {

  mascotaList!: Mascota[];
  vetId1 = '';
  url:string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioMascota: MascotaService,
  ) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.vetId1 = String(params.get('id'));
        this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
        console.log(this.vetId1)
        this.servicioMascota.getMascotasByVeterinarioId(Number(this.vetId1)).subscribe(mascotas => {
          this.mascotaList = mascotas;
        });
      })
    }

    confirmarEliminacion(id: number){
      if(confirm("Seguro que desea dar de baja a la mascota?")) {
        this.servicioMascota.deleteMascota(id).subscribe(); //Cambiar en el back
        for (let i = 0; i < this.mascotaList.length; i++) {
          if (this.mascotaList[i].id == id) {
            this.mascotaList[i].estado = {id: 2, nombre: 'De baja'} //Cambiar en el front
          }
        }
      }
    }

}
