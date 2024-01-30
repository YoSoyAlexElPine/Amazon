import { Component, Input } from '@angular/core';
import Usuario from '../../interfaces/user.interface';

@Component({
  selector: 'app-cesta',
  template: `

@if(usuario.cesta.length === 0) {
  <h1>♥ Cesta vacia ♥</h1>
  <br>
  <h1>Nombre de usuario: {{usuario.nombre}}</h1>
} @else {
  <h1>♥ Cesta ♥</h1>
  <ul>
    <li *ngFor="let item of usuario.cesta">{{ item | json}}</li>
  </ul>
  <button>Comprar</button>
}



`,
  styles: ``
})
export class CestaComponent {

  @Input() usuario: Usuario = {
    nombre: '',
    password: '',
    cesta: []
  }

  component = 2

  numProductos = 0

}
