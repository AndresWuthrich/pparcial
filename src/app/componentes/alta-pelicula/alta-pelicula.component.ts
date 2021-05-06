import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  @Output() creacionNuevaPelicula: EventEmitter<any> = new EventEmitter<any>();
  peliculaNueva: Pelicula;

  constructor() {  }

  ngOnInit(): void {
  }
  guardarNuevaPelicula(){
    this.creacionNuevaPelicula.emit(this.peliculaNueva);
    console.info(this.peliculaNueva);
    this.peliculaNueva = null; //vuelve al estado anterior
  }
  hacerNuevaPelicula(){
    this.peliculaNueva= new Pelicula();
    
  }
}
