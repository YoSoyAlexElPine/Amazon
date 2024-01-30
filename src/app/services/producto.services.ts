import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Producto from '../interfaces/product.interface';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})


export class ProductoServices {

  constructor(private firestore: Firestore) { }


  addProducto(producto: Producto){

    const usuarioRef = collection(this.firestore, 'productos')
    return addDoc(usuarioRef,producto)
  }

  getProducts(): Observable<Producto[]> {
    const usuariosRef = collection(this.firestore, 'productos')
    return collectionData(usuariosRef, {idField: 'id'}) as Observable<Producto[]>
  }

}