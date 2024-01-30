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
  <div class="productos">
    <div class="card" *ngFor="let producto of usuario.cesta">
        <img src="./assets/{{producto.nombre | lowercase | quitarEspacios}}.jpg" alt="Producto" class="product-image">
        <div class="product-details">
            <h2 class="product-name">{{producto.nombre_titulo}}</h2>
            <p class="product-price">{{producto.precio}}</p>
        </div>
    </div> 

</div>
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
