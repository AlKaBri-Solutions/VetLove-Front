import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClienteComponent } from './Formularios/formulario-cliente/formulario-cliente.component';
import { FormularioMascotaComponent } from './Formularios/formulario-mascota/formulario-mascota.component';
import { PaginaPrincipalLoginComponent } from './Login/pagina-principal-login/pagina-principal-login.component';
import { PaginaPrincipalVeterinarioComponent } from './Veterinario/pagina-principal-veterinario/pagina-principal-veterinario.component';
import { ErrorDefaultComponent } from './general/error-default/error-default.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'home', component: LandingPageComponent},
  {path: 'login', component: PaginaPrincipalLoginComponent},
  {path: 'veterinario', component: PaginaPrincipalVeterinarioComponent},
  {path: 'veterinario/mis-mascotas', component: PaginaPrincipalVeterinarioComponent},
  {path: 'veterinario/mis-tratamientos', component: PaginaPrincipalVeterinarioComponent},
  {path: 'veterinario/mis-clientes', component: PaginaPrincipalVeterinarioComponent},
  {path: 'veterinario/mi-perfil', component: PaginaPrincipalVeterinarioComponent},
  {path: 'veterinario/add-mascota', component: FormularioMascotaComponent},
  {path: 'veterinario/update-mascota', component: FormularioMascotaComponent},
  {path: 'veterinario/add-cliente', component: FormularioClienteComponent},
  {path: 'veterinario/update-cliente', component: FormularioClienteComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: ErrorDefaultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
