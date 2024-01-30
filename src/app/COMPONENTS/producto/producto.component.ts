import { Component, Input, OnInit } from '@angular/core';
import  Producto  from '../../interfaces/product.interface';
import { ProductoServices } from '../../services/producto.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  constructor(private productServices: ProductoServices) {}
  @Input() producto:Producto = {
    nombre: 'Iphone 12',
    nombre_titulo:'Apple iPhone 12 Pro, 128GB, Azul Pacifico - (Reacondicionado)',
    descripcion: 'El producto está reacondicionado, es totalmente funcional y está en excelentes condiciones. Respaldado por la garantía de 1 año de Amazon Renewed.',
    precio: 420.0
  }






}
