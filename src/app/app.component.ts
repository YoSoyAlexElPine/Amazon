import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./COMPONENTS/footer/footer.component";
import { HomeComponent } from "./COMPONENTS/home/home.component";
import { CestaComponent } from "./COMPONENTS/cesta/cesta.component";
import { LoginComponent } from "./COMPONENTS/login/login.component";
import { UserService } from './user.service';
import { BusquedaComponent } from "./COMPONENTS/busqueda/busqueda.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FooterComponent, HomeComponent, CestaComponent, LoginComponent, BusquedaComponent]
})
export class AppComponent  {


  botonLogin: String = "Iniciar sesion";

  componentes = [
     true,
     false,
     false,
     false
  ];

  usuario = {
    nombre: "",
    password: ""
  }


  cambiar(numero: number) {
    for (const key in this.componentes) {
      this.componentes[key] = false;
    }

    this.componentes[numero] = true

  }

}
