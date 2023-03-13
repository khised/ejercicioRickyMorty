import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { LocalizacionComponent } from './components/localizacion/localizacion.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    LocalizacionComponent,
    EpisodiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
