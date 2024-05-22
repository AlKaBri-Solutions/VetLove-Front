import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../servicio/cliente.service';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent {
  @Output()
  addClienteEvent = new EventEmitter<Cliente>();

  constructor(
    private servicioCliente: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  sendCliente!: Cliente

  formCliente: Cliente = {
    id: 0,
    nombre: '',
    correo: '',
    celular: '',
    cedula: '',
    veterinario: {
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
  }

  vetId1!: string;

  esActualizar: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (this.router.url.split('?')[0] == '/veterinario/add-cliente') {
        this.esActualizar = false;
        this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
      }
      else {
        this.esActualizar = true;
        this.servicioCliente.getClienteById(Number(this.router.url.split('idCliente=')[1].split('&')[0])).subscribe(cliente => {
          this.formCliente = cliente
          this.vetId1 = this.router.url.split('id=')[1].split('&')[0];
        })
      }
    });
  }

  registrarCliente(clienteForm: Cliente) {
    if (this.router.url.split('?')[0] == '/veterinario/add-cliente') {
      console.log(clienteForm);
      
      this.servicioCliente.saveCliente(clienteForm, this.vetId1).subscribe(cliente => {
        this.addClienteEvent.emit(cliente);
        this.router.navigate(['/veterinario/home/mis-clientes']);
      })
    }
    else {
      this.servicioCliente.updateCliente(clienteForm, this.vetId1).subscribe(cliente => {
        this.addClienteEvent.emit(cliente);
        this.router.navigate(['/veterinario/home/mis-clientes']);
      })
    }
  }
}
