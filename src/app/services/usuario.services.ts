import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Usuario from '../interfaces/user.interface';
import { Injectable } from '@angular/core';

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
    const placesRef = collection(this.firestore, 'usuarios')
    return collectionData(placesRef, {idField: 'id'}) as Observable<Usuario[]>
  }

  deletePlace(usuario: Usuario) {
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.nombre}`);
    return deleteDoc(usuarioRef);
  }

}