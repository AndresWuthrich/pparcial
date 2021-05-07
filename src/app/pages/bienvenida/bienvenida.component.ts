import { Component, OnInit } from '@angular/core';
import { GitService } from '../../services/git.service';


import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { Mensaje } from 'src/app/clases/mensaje';
// import { AuthService } from 'src/app/services/auth.service';
// import { MensajesService } from 'src/app/services/mensajes.service';



@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  email: string = '';
  password: string = '';
  // mensaje: Mensaje = new Mensaje();
  public miGit :any;
  
  // public userLogueado: Observable<any> = this.auth.fireStoreAuth.user;
  
  // constructor(private router: Router,
  //   public auth: AuthService,
  //   private mensajesService: MensajesService) { }


  // constructor(public auth: AuthService) { }

  constructor(public gitService: GitService) { 
    this.gitService.miGit()
    .subscribe((datos)=>{
      this.miGit = datos;
    })
  }



  ngOnInit(): void {
  }
  
  // Registro(){
  //   // this.auth.usuario = 'Andres';
  //   this.router.navigate(['registro']);
  // }

  // EnviarMensaje(){
  //   console.log("msg 1");
  //   this.mensajesService.create(this.mensaje).then(() => {
  //     console.log("Mensaje enviado");
  //   });
  // }

  Logout(){
    // this.auth.Logout();
  }
}
