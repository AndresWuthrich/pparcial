import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActoresService } from '../../services/actores.service';
import { PeliculasService } from '../../services/peliculas.service';
//import { MensajesService } from 'src/app/services/mensajes/mensajes.service';
import { Actor } from '../../clases/actor';
import { Pelicula } from '../../clases/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altapeliculas',
  templateUrl: './altapeliculas.component.html',
  styleUrls: ['./altapeliculas.component.css']
})
export class AltaPeliculasComponent implements OnInit {
  //listaCompleta
  listadoActores!: Actor[];
  //actor
  listaActoresSeleccionados: Array<Actor> = new Array<Actor>();
  public banderaActorSeleccionado = true;
  //peli
  public peliculaFuturaAlta: Pelicula = new Pelicula();
  //form
  public forma: FormGroup;
  //foto
  private imagen: any;

  constructor(private actService: ActoresService, private peliService: PeliculasService, private fb: FormBuilder, private router: Router) {
  // constructor(private actService: ActoresService, private peliService: PeliculasService, private fb: FormBuilder, private router: Router, private _Mservice: MensajesService) {

  }

  ngOnInit(): void {
    this.actService.traerTodos().subscribe((actores: Actor[]) => {
      //console.log(actores);
      this.listadoActores = actores;
    });

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'fechaEstreno': ['', Validators.required],
      'fotoPelicula': ['', Validators.required],
      'tipo': ['', Validators.required]
    });
    //console.log(this.forma);
  }

  cargarActorSeleccionado(actor: Actor) {
    // console.info(actor);

    this.banderaActorSeleccionado = false;
    if (this.listaActoresSeleccionados.includes(actor)) {
      console.log("Actor ya incluido");
    }
    else {
      this.listaActoresSeleccionados.push(actor);
      console.log(this.listaActoresSeleccionados);
    }

    this.peliculaFuturaAlta.actores = this.listaActoresSeleccionados;
    console.log(this.listaActoresSeleccionados)
  }

  eliminarActor(actor: Actor) {
    this.listaActoresSeleccionados.splice(this.listaActoresSeleccionados.indexOf(actor), 1);
    this.peliculaFuturaAlta.actores = this.listaActoresSeleccionados;
    if(this.listaActoresSeleccionados.length == 0){
      this.banderaActorSeleccionado = true;
    }
  }

  nuevaImagen(event: any): void {
    this.imagen = event.target.files[0];
    //console.log(this.imagen);
  }

  altaPelicula() {
    console.log(this.forma);
    // console.log(this.imagen);
    // console.log("-------------");
    this.peliculaFuturaAlta.nombre =this.forma.controls['nombre'].value;
    this.peliculaFuturaAlta.tipo =this.forma.controls['tipo'].value;
    this.peliculaFuturaAlta.fechaEstreno =this.forma.controls['fechaEstreno'].value;
    this.peliculaFuturaAlta.fotoPelicula = this.imagen.name;
    // this.peliculaFuturaAlta.cantidadPublico = "0";
    
    console.log(this.peliculaFuturaAlta);

    this.peliService.subirImagen(this.imagen, this.peliculaFuturaAlta);
    // this._Mservice.mensajeExitoso('Pelicula dada de alta correctamente!');
    // this.router.navigateByUrl("/Bienvenidos");
  }
}