import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas: Pelicula[];
  @Output() peliculaSeleccionadaEvento: EventEmitter<any> = new EventEmitter<any>() ;
  
  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarPelicula(pelicula: Pelicula){
    console.info('Pelicula:' + pelicula);
    this.peliculaSeleccionadaEvento.emit(pelicula);
  }
}
