import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import interpersonajes = namespace.interpersonajes;
import interepisodios = namespace.interepisodios;
import interlocalizacion = namespace.interlocalizacion;

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) {
  }
  getPersonajes(): Observable<interpersonajes>{
    return this.http.get<interpersonajes>('https://rickandmortyapi.com/api/character')
  }
  getEpisodio(): Observable<interepisodios>{
    return this.http.get<interpersonajes>('https://rickandmortyapi.com/api/episode')
  }
  getLocalizacion(): Observable<interlocalizacion>{
    return this.http.get<interpersonajes>('https://rickandmortyapi.com/api/location')
  }
}
