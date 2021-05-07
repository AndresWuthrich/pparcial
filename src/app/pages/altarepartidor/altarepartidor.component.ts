import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Repartidor } from '../../clases/repartidor';

@Component({
  selector: 'app-altarepartidor',
  templateUrl: './altarepartidor.component.html',
  styleUrls: ['./altarepartidor.component.css']
})
export class AltarepartidorComponent implements OnInit {

  public forma: FormGroup;
  constructor(private fb: FormBuilder)  {

  }

  ngOnInit(): void {
 }

 altaRepartidor() {
  let nuevoRepartidor: Repartidor = {
    nombre: this.forma.controls['nombre'].value,
    dni: this.forma.controls['dni'].value,
    edad: this.forma.controls['edad'].value,
    capacidadTrans: this.forma.controls['capacidad'].value,
    unidadPropia: this.forma.controls['tieneUnidad'].value,
    pais: "",
    bandera: "",
  }
  }
 }