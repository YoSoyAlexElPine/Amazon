import { Component, EventEmitter, Input, Output } from '@angular/core';
import Usuario from '../../interfaces/user.interface';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent {


  @Output() cerrarSesionBoolean = new EventEmitter<boolean>();
  @Input ()usuario: Usuario = {
    nombre: '',
    password: '',
    cesta: []
  };

  cerrarSesion() {
    this.cerrarSesionBoolean.emit(true)
  }
}
