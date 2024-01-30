import { Component, Input } from '@angular/core';
import Usuario from '../../interfaces/user.interface';
import { UsuarioService } from '../../services/usuario.services';

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
            <p class="product-price">{{producto.precio | currency}}</p>
            <br>
            <p class="product-cantidad">{{producto.cantidad}}</p>
        </div>
    </div> 

</div>
  <button (click)="comprar()">Comprar</button>
}



`,
  styleUrl: './cesta.component.css'
})
export class CestaComponent {


  constructor(private us: UsuarioService) { }

  @Input() usuario: Usuario = {
    nombre: '',
    password: '',
    cesta: []
  }

  comprar(){
    console.log(this.usuario.id)
    this.usuario.id != null ? this.us.quitarProductoALaCesta(this.usuario) : "error";

  }


  component = 2

  numProductos = 0

}
