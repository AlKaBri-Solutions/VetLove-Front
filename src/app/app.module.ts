import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormularioClienteComponent } from './Formularios/formulario-cliente/formulario-cliente.component';
import { FormularioMascotaComponent } from './Formularios/formulario-mascota/formulario-mascota.component';
import { PaginaPrincipalLoginComponent } from './Login/pagina-principal-login/pagina-principal-login.component';
import { MiPerfilComponent } from './Veterinario/mi-perfil/mi-perfil.component';
import { MisClientesComponent } from './Veterinario/mis-clientes/mis-clientes.component';
import { MisMascotasComponent } from './Veterinario/mis-mascotas/mis-mascotas.component';
import { MisTratamientosComponent } from './Veterinario/mis-tratamientos/mis-tratamientos.component';
import { PaginaPrincipalVeterinarioComponent } from './Veterinario/pagina-principal-veterinario/pagina-principal-veterinario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnConstruccionComponent } from './general/en-construccion/en-construccion.component';
import { ErrorDefaultComponent } from './general/error-default/error-default.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

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
    ErrorDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
