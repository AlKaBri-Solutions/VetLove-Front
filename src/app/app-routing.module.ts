import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalVeterinarioComponent } from './Veterinario/pagina-principal-veterinario/pagina-principal-veterinario.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'home', component: LandingPageComponent},
  {path: 'veterinario', component: PaginaPrincipalVeterinarioComponent},

  {path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
