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
  mostrarComponente1 = true;

  usuario = {
    nombre: "",
    password: ""
   }

  cambiarLogin() {
    this.mostrarComponente1 = !this.mostrarComponente1;
    
    if (this.botonLogin == "Iniciar sesion"){
      this.botonLogin = "Home"
    } else {
      this.botonLogin = "Iniciar sesion"
    }
    

  }
}
