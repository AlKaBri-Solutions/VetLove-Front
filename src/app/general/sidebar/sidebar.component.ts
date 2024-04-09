import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  ruta!: string
  id!: number

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ruta = this.router.url.split('?')[0];
    this.id = Number(this.router.url.split('id=')[1].split('&')[0]);
  }
}
