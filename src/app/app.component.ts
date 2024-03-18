import { Component} from '@angular/core';
import Usuario from './interfaces/user.interface';
import { Observable } from 'rxjs';
import { UsuarioService } from './services/usuario.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(private userServices: UsuarioService) {}


  usuarios: Observable<Usuario[]> = this.userServices.getUsers();

  usuario: Usuario = {
    nombre: 'invitado',
    password: '1234',
    cesta: []
  };

  login:boolean = false
  nombre: String = "Entrar"
  botonLogin: string = "Iniciar sesion";
  componentes = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];


  cambiar(numero: number) {

    for (const key in this.componentes) {
      this.componentes[key] = false;
    }

    this.componentes[numero] = true



  }

  recibirLogin(usuario: String) {

    this.nombre = usuario;
    this.login = this.nombre != "Entrar"

    if (this.login) {
      this.cambiar(0)
    }

    
  if (this.login){
    this.usuarios.subscribe((usuarios) => {
      usuarios.forEach((usuario) => {
        if (this.nombre === usuario.nombre) {
          this.usuario = usuario
          console.log(this.usuario.nombre)
        }
      });
    });
  }

  }

  recibirCerrarSesion(cerrar: boolean) {
    this.login = !cerrar
    this.nombre = "Entrar"
    this.cambiar(0)
  }


  recibirVolverHome(home: boolean) {
    if (home) {
      this.cambiar(0)
    }

  }







}
