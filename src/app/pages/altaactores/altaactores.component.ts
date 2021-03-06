import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { ActoresService } from '../../services/actores.service';
// import { MensajesService } from 'src/app/services/mensajes/mensajes.service';
import { Pais } from '../../clases/pais';
import { Actor } from '../../clases/actor';

@Component({
  selector: 'app-altaactores',
  templateUrl: './altaactores.component.html',
  styleUrls: ['./altaactores.component.css']
})
export class AltaActoresComponent implements OnInit {

  listadoPaises!: any[];
  paisSeleccionado!: Pais;
  public forma: FormGroup;

  constructor(private paisService: PaisesService, private fb: FormBuilder, private actSservice: ActoresService, private router: Router)  {

  // constructor(private paisService: PaisesService, private fb: FormBuilder, private actSservice: ActoresService, private router: Router, private _Mservice: MensajesService)  {
    this.listadoPaises = [];
  }

  ngOnInit(): void {

    //   await this.Pservice.todos().then((res: any) => {
    //     console.log(res);
    //   });esta es la 2da opcion con async await
    this.paisService.todos().subscribe((paises) => {

      this.listadoPaises = JSON.parse(JSON.stringify(paises));
      //console.log(paises);
    });

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'apellido': ['', Validators.required],
      'sexo': ['', Validators.required],
      // 'telefono': ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      // 'email': ['', [Validators.required, Validators.email]],
      'nacionalidad': [{ value: '', disabled: true }, this.validarNombrePais],
    });
    //console.log(this.forma);
  }

  validarNombrePais(control: AbstractControl): null | object {


    const nombre = <string>control.value;
    //console.log(nombre);
    if (nombre != null) {
      return {
        valido: true
      }
    }
    else {
      return null;
    }
  }


  cargarPaisSeleccionado(pais: Pais) {
    console.info(pais);
    this.paisSeleccionado = pais;

    // console.info(this.peliculaSeleccionada);
  }

  altaActor() {
    // var nombre = this.forma.controls['nombre'].value;
    // var apellido = this.forma.controls['apellido'].value;
    // var telefono = this.forma.controls['telefono'].value;
    // var email = this.forma.controls['email'].value;
    // var nacionalidad = this.paisSeleccionado.name;
    // console.log(nombre, apellido, telefono, email, nacionalidad);

    let nuevoActor: Actor = {
      nombre: this.forma.controls['nombre'].value,
      apellido: this.forma.controls['apellido'].value,
      sexo: this.forma.controls['sexo'].value,
      // telefono: this.forma.controls['telefono'].value,
      // email: this.forma.controls['email'].value,
      pais: this.paisSeleccionado.nombre
    }
    const queDevolvio = this.actSservice.altaActor(nuevoActor);
    queDevolvio.then(ok => {
      if (ok.path) {
        // this._Mservice.mensajeExitoso('Actor dado de alta correctamente!');
        this.router.navigateByUrl("/Bienvenido");
      }
      else {
        // this._Mservice.mensajeError('Lo sentimos mucho ocurrio un error!');
        console.log("no ok");
      }
    });
  }

  prueba() {

  }
}