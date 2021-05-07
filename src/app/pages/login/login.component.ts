import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  // constructor(public auth: AuthService) { }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Ingresar(){
    // this.auth.Ingresar(this.email, this.password);
    this.email=this.password="";
    this.router.navigate(['bienvenida']);

  }

  Autocompletar(){
    this.email="empleado";
    this.password="1234";
  }
  Autocompletar2(){
    this.email="admin";
    this.password="admin";
  }
}