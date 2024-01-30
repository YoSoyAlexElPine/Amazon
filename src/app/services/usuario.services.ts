import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getDocs, updateDoc } from '@angular/fire/firestore';
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

  deleteUser(usuario: string) {
    const usuarioRef = doc(this.firestore, `usuarios/${usuario}/mailOrPhone`);
    return deleteDoc(usuarioRef);
  }

  async shearchUser(nombre:string):Promise<Usuario> {
    const usuarios$: Observable<Usuario[]> = this.getUsers()

    let retorno: Usuario = {
      nombre:'no existe',
      password:'',
      cesta:[]
    }

    usuarios$.subscribe((usuarios) => {
      const usuario = usuarios.find((usuario) => usuario.nombre === nombre);
          if (typeof usuario != 'undefined'){
            console.log(usuario.nombre)
            retorno = usuario
          }
    }); 

    return retorno
    





  }



  // Agrega un producto a la colección "cesta" para un usuario específico
  async agregarProductoALaCesta(usuario: string, producto: Producto) {

    const usuarioObjeto: Usuario=await this.shearchUser(usuario)
    console.log('Resultado busqueda: '+usuarioObjeto.nombre)

    const usuarioRef = doc(this.firestore, `usuarios/${usuarioObjeto.id}`);
    const updateData = {
      cesta: usuarioObjeto.cesta.push(producto)
    }

    updateDoc(usuarioRef, updateData)
    .then(()=>{
      console.log('actualizado')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  quitarProductoALaCesta(usuario: Usuario) {
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`);
    const updateData = {
      cesta: []
    }

    updateDoc(usuarioRef, updateData)
    .then(()=>{
      console.log('actualizado')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

}