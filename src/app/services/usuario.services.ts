import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Usuario from '../interfaces/user.interface';
import { Injectable } from '@angular/core';
import  Producto  from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})


export class UsuarioService {

  constructor(private firestore: Firestore) { }


  addUser(usuario: Usuario){

    const usuarioRef = collection(this.firestore, 'usuarios')
    return addDoc(usuarioRef,usuario)
  }

  getUsers(): Observable<Usuario[]> {
    const usuariosRef = collection(this.firestore, 'usuarios')
    return collectionData(usuariosRef, {idField: 'id'}) as Observable<Usuario[]>
  }

  deleteUser(usuario: Usuario) {
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.nombre}`);
    return deleteDoc(usuarioRef);
  }



  // Agrega un producto a la colección "cesta" para un usuario específico
  agregarProductoALaCesta(idUsuario: string, producto: Producto) {
    const cestaRef = collection(this.firestore, 'usuarios', idUsuario, 'cesta');
    return addDoc(cestaRef, producto);
  }

}