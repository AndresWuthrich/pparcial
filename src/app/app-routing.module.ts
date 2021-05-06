import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { AltaActoresComponent } from './pages/altaactores/altaactores.component';
import { AltaPeliculasComponent } from './pages/altapeliculas/altapeliculas.component';
import { BienvenidosComponent } from './pages/bienvenidos/bienvenidos.component';
import { BusquedapeliculasComponent } from './pages/busquedapeliculas/busquedapeliculas.component';

const routes: Routes = [
  {path: 'Bienvenidos', component: BienvenidosComponent},
  {path: 'Busquedapeliculas', component: BusquedapeliculasComponent},
  {path: 'Altaactor', component: AltaActoresComponent},
  {path: 'Altapelicula', component: AltaPeliculasComponent},
  {path: '', redirectTo: 'Busquedapeliculas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
