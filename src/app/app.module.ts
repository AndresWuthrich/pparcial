import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './pages/bienvenidos/bienvenidos.component';
import { BusquedapeliculasComponent } from './pages/busquedapeliculas/busquedapeliculas.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AltaPeliculasComponent } from './pages/altapeliculas/altapeliculas.component';
import { ListadoPeliculaComponent } from './componentes/listado-pelicula/listado-pelicula.component';
import { AltaActoresComponent } from './pages/altaactores/altaactores.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AltarepartidorComponent } from './pages/altarepartidor/altarepartidor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    BusquedapeliculasComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent,
    TablaActorComponent,
    AltaActorComponent,
    TablaPaisesComponent,
    AltaPeliculasComponent,
    ListadoPeliculaComponent,
    AltaActoresComponent,
    NavbarComponent,
    BienvenidaComponent,
    LoginComponent,
    PageNotFoundComponent,
    AltarepartidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
