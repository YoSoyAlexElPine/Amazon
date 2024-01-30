import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Usuario from '../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { UsuarioService } from '../../services/usuario.services';
import Producto from '../../interfaces/product.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  usuarios: Observable<Usuario[]> = this.userServices.getUsers();
  nombres: string[] = [];
  passwords: string[] = [];

  constructor(private userServices: UsuarioService) { }

  ngOnInit(): void {
    this.usuarios.subscribe((usuarios) => {
      usuarios.forEach((usuario) => {
        this.nombres.push(usuario.nombre.toString());
        //console.log(usuario.nombre.toString())
      });
    });

    this.usuarios.subscribe((usuarios) => {
      usuarios.forEach((usuario) => {
        this.passwords.push(usuario.password.toString());
        //console.log(usuario.nombre.toString())
      });
    });
  }

  nombre = '';
  password = '';
  mailOrPhone = '';
  passwordConfirm = '';


  @Output() mensajeEmitido = new EventEmitter<boolean>();
  @Input() usuario: Usuario = {
    nombre: this.nombre,
    password: this.password,
    mailOrPhone: this.mailOrPhone,
    cesta: [] as Producto[]
  };

  async registrarse() {
    const existe = await this.existe();

    //console.log(this.nombre)

    if (!existe) {
      if (this.password === this.passwordConfirm) {
        this.usuario.nombre = this.nombre;
        this.usuario.password = this.password;
        this.usuario.mailOrPhone = this.mailOrPhone;

        this.userServices.addUser(this.usuario);

        console.log(this.nombre + ' agregado :)');
      } else {
        console.log('password no concide en los campos ☺')
      }
    } else {
      console.log(this.nombre + ' ya existe');
    }
  }

  entrar() {
    this.mensajeEmitido.emit(false)
  }


  async existe(): Promise<Boolean> {
    let existe: Boolean = false;

    this.nombres.forEach((n) => {
      if (n === this.nombre) {
        existe = true;
      }
    });

    return existe;
  }
}
