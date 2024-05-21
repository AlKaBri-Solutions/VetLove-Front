import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RiveModule } from 'ng-rive';
import { PaginaPrincipalAdminComponent } from './Admin/pagina-principal-admin/pagina-principal-admin.component';
import { FormularioClienteComponent } from './Formularios/formulario-cliente/formulario-cliente.component';
import { FormularioMascotaComponent } from './Formularios/formulario-mascota/formulario-mascota.component';
import { FormularioTratamientoComponent } from './Formularios/formulario-tratamiento/formulario-tratamiento.component';
import { FormularioVeterinarioComponent } from './Formularios/formulario-veterinario/formulario-veterinario.component';
import { PaginaPrincipalLoginComponent } from './Login/pagina-principal-login/pagina-principal-login.component';
import { UbicacionFisicaComponent } from './Maps/ubicacion-fisica/ubicacion-fisica.component';
import { DetalleMascotaComponent } from './Mascota/detalle-mascota/detalle-mascota.component';
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
  {path: 'cliente/mis-mascotas', component: PaginaPrincipalVeterinarioComponent},
  {path: 'cliente/home/mis-mascotas', component: PaginaPrincipalVeterinarioComponent},
  {path: 'cliente/home/mi-perfil', component: PaginaPrincipalVeterinarioComponent},
  {path: 'cliente/mi-perfil', component: PaginaPrincipalVeterinarioComponent},
  {path: 'veterinario/add-mascota', component: FormularioMascotaComponent},
  {path: 'veterinario/update-mascota', component: FormularioMascotaComponent},
  {path: 'veterinario/add-cliente', component: FormularioClienteComponent},
  {path: 'veterinario/update-cliente', component: FormularioClienteComponent},
  {path: 'mascota/info-mascota', component: DetalleMascotaComponent},
  {path: 'admin', redirectTo: "admin/dashboard", pathMatch: 'full'},
  {path: 'admin/dashboard', component: PaginaPrincipalAdminComponent},
  {path: 'admin/mis-veterinarios', component: PaginaPrincipalAdminComponent},
  {path: 'admin/mi-perfil', component: PaginaPrincipalAdminComponent},
  {path: 'admin/add-veterinario', component: FormularioVeterinarioComponent},
  {path: 'admin/update-veterinario', component: FormularioVeterinarioComponent},
  {path: 'tratamiento/add-tratamiento', component: FormularioTratamientoComponent},
  {path: 'ubicacion', component: UbicacionFisicaComponent},

  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: ErrorDefaultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RiveModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
