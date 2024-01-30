import { Component } from '@angular/core';
import  Producto  from '../../interfaces/product.interface';
import { ProductoServices } from '../../services/producto.services';


@Component({
  selector: 'app-mas-vendidos',
  templateUrl: './mas-vendidos.component.html',
  styleUrl: './mas-vendidos.component.css'
})
export class MasVendidosComponent {

  constructor(private productServices: ProductoServices) {}

  productos = this.productServices.getProducts()

  productosVisible = true
  producto:Producto = {
    nombre: 'productoNombre',
    nombre_titulo: 'titulo',
    descripcion: "lorem",
    precio: 10.0,
  };

  productoDetalle(producto: Producto) {
    this.productosVisible = !this.productosVisible
   

    this.producto = producto;

  }

}
