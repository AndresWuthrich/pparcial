import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaParaMostrar: Pelicula;

  constructor() {
    // this.peliculaParaMostrar = new Pelicula();
    // this.peliculaParaMostrar.nombre = "PRUEBA";
    // this.peliculaParaMostrar.cantidadPublico = 999;
    // this.peliculaParaMostrar.tipo = "TIPO NAAA";
    // this.peliculaParaMostrar.fechaEstreno = new Date();
   }

  ngOnInit(): void {
  }

}
