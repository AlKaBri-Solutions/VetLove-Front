import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RiveModule } from 'ng-rive';
import { FormularioClienteComponent } from './Formularios/formulario-cliente/formulario-cliente.component';
import { FormularioMascotaComponent } from './Formularios/formulario-mascota/formulario-mascota.component';
import { PopupComponent } from './Formularios/popup/popup.component';
import { PaginaPrincipalLoginComponent } from './Login/pagina-principal-login/pagina-principal-login.component';
import { DetalleMascotaComponent } from './Mascota/detalle-mascota/detalle-mascota.component';
import { MiPerfilComponent } from './Veterinario/mi-perfil/mi-perfil.component';
import { MisClientesComponent } from './Veterinario/mis-clientes/mis-clientes.component';
import { MisMascotasComponent } from './Veterinario/mis-mascotas/mis-mascotas.component';
import { MisTratamientosComponent } from './Veterinario/mis-tratamientos/mis-tratamientos.component';
import { PaginaPrincipalVeterinarioComponent } from './Veterinario/pagina-principal-veterinario/pagina-principal-veterinario.component';
import { AnimacionPerroComponent } from './animaciones/animacion-perro/animacion-perro.component';
import { AnimacionPersonaComponent } from './animaciones/animacion-persona/animacion-persona.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnConstruccionComponent } from './general/en-construccion/en-construccion.component';
import { ErrorDefaultComponent } from './general/error-default/error-default.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { PaginaPrincipalAdminComponent } from './Admin/pagina-principal-admin/pagina-principal-admin.component';
import { MisVeterinariosComponent } from './Admin/mis-veterinarios/mis-veterinarios.component';
import { MedicamentosDataGridComponent } from './DevExpress/medicamentos-data-grid/medicamentos-data-grid.component';
import { DevExtremeModule  } from 'devextreme-angular';
import { TratamientosChartComponent } from './DevExpress/tratamientos-chart/tratamientos-chart.component';

import { DatePipe } from '@angular/common';

import { FormularioVeterinarioComponent } from './Formularios/formulario-veterinario/formulario-veterinario.component';
import { FormularioTratamientoComponent } from './Formularios/formulario-tratamiento/formulario-tratamiento.component';



// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SidebarComponent,
    MisMascotasComponent,
    PaginaPrincipalVeterinarioComponent,
    FormularioMascotaComponent,
    MisTratamientosComponent,
    MisClientesComponent,
    MiPerfilComponent,
    PaginaPrincipalLoginComponent,
    EnConstruccionComponent,
    FormularioClienteComponent,
    ErrorDefaultComponent,
    PopupComponent,
    AnimacionPersonaComponent,
    AnimacionPerroComponent,
    DetalleMascotaComponent,
    DashboardComponent,
    PaginaPrincipalAdminComponent,
    MisVeterinariosComponent,
    MedicamentosDataGridComponent,
    TratamientosChartComponent,
    FormularioVeterinarioComponent,
    FormularioTratamientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RiveModule,
    DevExtremeModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  ngOnInit() {
  }
 }
