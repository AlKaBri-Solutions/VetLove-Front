import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidad } from 'src/app/models/Especialidad';
import { EstadoVet } from 'src/app/models/EstadoVet';
import { Veterinario } from 'src/app/models/Veterinario';
import { EspecialidadService } from 'src/app/servicio/especialidad.service';
import { EstadoVetService } from 'src/app/servicio/estado-vet.service';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-formulario-veterinario',
  templateUrl: './formulario-veterinario.component.html',
  styleUrls: ['./formulario-veterinario.component.css']
})
export class FormularioVeterinarioComponent {
  @Output()
  addVeterinarioEvent = new EventEmitter<Veterinario>();

  constructor(
    private servicioVeterinario: VeterinarioService,
    private router: Router,
    private route: ActivatedRoute,
    private servicioEspecialidad: EspecialidadService,
    private servicioEstadoVet: EstadoVetService,
  ) {}

  sendVeterinario!: Veterinario;
  formVeterinario: Veterinario = {
    idVeterinario: 0,
    cedula: '',
    nombre: '',
    contrasenia: '',
    fotoUrl: '',
    especialidad: {
      idEspecialidad: 1,
      nombre: 'General'
    },
    estado: {
      idEstado: 1,
      nombre: 'Activo'
    }
  }

  esActualizar: boolean = false;

  estados!: EstadoVet[];
  especialidades!: Especialidad[];

  ngOnInit(): void {
    this.servicioEspecialidad.getAllEspecialidades().subscribe(especialidades => {
      this.especialidades = especialidades
    })
    this.servicioEstadoVet.getAllEstadosVet().subscribe(estados => {
      this.estados = estados
    })
    this.route.paramMap.subscribe(params => {
      if (this.router.url.split('?')[0] == '/admin/add-veterinario') {
        this.esActualizar = false;
        
      }
      else {
        this.esActualizar = true;
        this.servicioVeterinario.getVeterinarioById(Number(this.router.url.split('id=')[1].split('&')[0])).subscribe(veterinario => {
          this.formVeterinario = veterinario
        })
      }
    });
  }

  registrarVeterinario(veterinarioForm: Veterinario) {
    if (this.router.url.split('?')[0] == '/admin/add-veterinario') {
      this.servicioVeterinario.saveVeterinario(veterinarioForm).subscribe(veterinario => {
        this.addVeterinarioEvent.emit(veterinario);
        this.router.navigate(['/admin/mis-veterinarios']);
      })
    }
    else {
      this.servicioVeterinario.updateVeterinario(veterinarioForm).subscribe(veterinario => {
        this.addVeterinarioEvent.emit(veterinario);
        this.router.navigate(['/admin/mis-veterinarios']);
      })
    }
  }

}
