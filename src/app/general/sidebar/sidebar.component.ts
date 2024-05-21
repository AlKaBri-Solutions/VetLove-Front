import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  ruta!: string
  id!: number

  @Input() 
  tipoUsuario: string = "";

  constructor(
    private router: Router,
    private location: Location
  ) { }

  getCurrentRoute(): string {
    return this.location.path();
  }
}
