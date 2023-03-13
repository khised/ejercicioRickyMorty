import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonajesComponent} from "./components/personajes/personajes.component";
import {LocalizacionComponent} from "./components/localizacion/localizacion.component";
import {EpisodiosComponent} from "./components/episodios/episodios.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/personajes',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component:PersonajesComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'localizacion',
    component: LocalizacionComponent
  },
  {
    path: 'episodios',
    component: EpisodiosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
