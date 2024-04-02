import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MisMascotasComponent } from './Veterinario/mis-mascotas/mis-mascotas.component';
import { PaginaPrincipalVeterinarioComponent } from './Veterinario/pagina-principal-veterinario/pagina-principal-veterinario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { FormularioMascotaComponent } from './general/formulario-mascota/formulario-mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SidebarComponent,
    MisMascotasComponent,
    PaginaPrincipalVeterinarioComponent,
    FormularioMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
