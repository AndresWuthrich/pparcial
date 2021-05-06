import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() listadoPaises: Pais;
  @Output() paisSeleccionadoEvento: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionarPais(pais: Pais){
    console.log('Pais' + pais);
    this.paisSeleccionadoEvento.emit(pais);
  }
}
