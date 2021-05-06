import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {

  @Output() creacionNuevoActor: EventEmitter<any> = new EventEmitter<any>();
  actorNuevo: Actor;
  paisSeleccionado: Pais;
  listadoPaises: Pais[];

  constructor() { }

  ngOnInit(): void {
  }

  guardarNuevoActor(){
    this.creacionNuevoActor.emit(this.actorNuevo);
    console.info(this.actorNuevo);
    this.actorNuevo = null; //vuelve al estado anterior
  }
  hacerNuevoActor(){
    this.actorNuevo= new Actor();    
  }

  
  cargarPaisSeleccionado(pais: Pais){
    this.paisSeleccionado = pais;
  }

  cargarNuevoActor(pais: Pais){
    this.listadoPaises.push(pais);
    console.log("asasdada"+ pais);
  }
}
