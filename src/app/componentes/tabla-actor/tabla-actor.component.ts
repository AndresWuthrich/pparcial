import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Input() listadoActores: Actor[];
  @Output() actorSeleccionadoEvento: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarActor(actor: Actor){
    console.log('Actor' + actor);
    this.actorSeleccionadoEvento.emit(actor);
  }
}
