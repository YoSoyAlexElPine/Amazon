import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./COMPONENTS/footer/footer.component";
import { HomeComponent } from "./COMPONENTS/home/home.component";
import { CestaComponent } from "./COMPONENTS/cesta/cesta.component";
import { LoginComponent } from "./COMPONENTS/login/login.component";
import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FooterComponent, HomeComponent, CestaComponent, LoginComponent]
})
export class AppComponent {

  botonLogin:String = "Iniciar sesion";

  mostrarHome = true
  mostrarCesta = false
  mostrarLogin = false

  usuario = {
    nombre: "",
    password: ""
   }

  cambiarLogin() {
    this.mostrarLogin = !this.mostrarLogin;
    
  }
  cambiarCesta() {
    this.mostrarCesta = !this.mostrarCesta;
    this.mostrarHome = !this.mostrarCesta;
  }
  cambiarHome() {
    this.mostrarHome = true;
  }

}
