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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioMascota: MascotaService,
  ) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.servicioMascota.getAllMascotas().subscribe(mascotas => {
          this.mascotaList = mascotas;
        });
      })
    }

}
