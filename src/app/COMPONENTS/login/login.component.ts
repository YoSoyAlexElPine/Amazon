import { Component, EventEmitter, Input, OnInit, Output, getNgModuleById } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.services';
import Usuario from '../../interfaces/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  template: `
    <main>
  <nav class="image-container">
    <img src="./assets/amazon_logo_negro.png" alt="Home">
  </nav>      
  <div class="container"  *ngIf="!visibilidadRegistro">
    <form>
      <h1>Iniciar sesión</h1>
      <label for="usuario"><b>Nombre de usuario</b></label>
      <input
        [(ngModel)]="nombre"
        type="text"
        id="usuario"
        name="usuario"
        required
      />

      <label for="password"><b>Contraseña</b></label>
      <input
        [(ngModel)]="password"
        type="password"
        id="contrasena"
        name="contrasena"
        required
      />
      
      <button id="login" type="button" (click)="iniciarSesion()">Iniciar Sesión</button>

      <p>
          Al continuar, aceptas las <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
          Condiciones de uso y venta</a> de Amazon. 
          Consulta nuestro <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200545460">
          Aviso de privacidad</a>, nuestro <a href="https://www.amazon.es/gp/help/customer/display.html/?nodeId=201890250">
          Aviso sobre cookies</a> y 
          nuestro <a href="https://www.amazon.es/gp/help/customer/display.html?nodeId=201909150">
          Aviso sobre anuncios basados en intereses.</a>
      </p>

      <details>
        <summary><a href="">¿Necesitas ayuda?</a></summary>
        <ul>
          <li><a>¿Has olvidado la contraseña?</a></li>
          <li><a>Otros problemas al inicial sesion</a></li>
        </ul>
      </details>
  
    </form>

      <h5 class="divider" aria-level="5">¿Eres nuevo en amazon?</h5>

    <button id="registro" type="button" (click)="registrarse()">Crea tu cuenta de Amazon</button>

    </div>


    <app-register
      *ngIf="visibilidadRegistro"
      (mensajeEmitido)="recibirMensaje($event)"
    ></app-register>

    </main>
  `,
  styles: ` 

  @font-face {
    font-family: 'Amazon Ember';
    src: url('../../../assets/fonts/Amazon Ember.ttf') format('truetype');
  }

  .container {
    display: flex;
    justify-content: center; /* Alinear horizontalmente al centro */
    align-items: center; /* Alinear verticalmente al centro */
    flex-direction: column; /* Alinear elementos verticalmente */
  }


  // .divider {
  //   border-top: 1px solid #e7e7e7;
  // }


  main {
    background-color: white;
    font-family: "Amazon Ember", Arial, sans-serif;
    font-weight: normal;
  }

  h5 {
    color: #797978; 
    font-weight: normal;
  }
  
  form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
    box-sizing: border-box;
  }

  p,a {
    font-size: 14px;
  }

  a {
    color: #007acc; /* Azul más claro */
    text-decoration: none; /* Eliminar subrayado por defecto */

  }

  a:hover {
    color: #d35400; /* Naranja más oscuro */
    text-decoration: underline; /* Añadir subrayado al pasar el ratón */

  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
 }

  .image-container img {
    cursor: pointer;
    padding: 20px;
    height: 50px;
  }


  #login {
    background-color: #ffd915;
    font-family: "Amazon Ember", Arial, sans-serif;
    width: 100%;
    color: black;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  #login:hover {
    background-color: #f6ca01;
  }

  #registro {
    background-color: white;
    font-family: "Amazon Ember", Arial, sans-serif;
    outline: 0;
    width: 100%;
    max-width: 320px;
    color: black;
    border: 2px solid #edecec;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  `,
})
export class LoginComponent implements OnInit {
  usuarios: Observable<Usuario[]> = this.userServices.getUsers();
  nombres: string[] = [];
  passwords: string[] = [];

  nombre = '';
  password = '';
  visibilidadRegistro = false;

  @Output() volverHome = new EventEmitter<boolean>();
  @Output() nombreLogin = new EventEmitter<string>();
  @Input() usuario: Usuario = {
    nombre: this.nombre,
    password: this.password,
    cesta: []
  };

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

  registrarse() {
    this.visibilidadRegistro = !this.visibilidadRegistro;
  }

  home() {
    this.volverHome.emit(true)
  }

  async iniciarSesion() {
    const existe: Boolean = await this.existe();
    const correcto: Boolean = await this.correcto();

    if (existe) {
      if (correcto) {
        console.log('Te logeaste :O');

        this.nombreLogin.emit(this.nombre)
      } else {
        console.log('Password incorrecta :#');
      }
    } else {
      console.log(this.nombre + ' no fue encontrado :C');
    }
  }

  recibirMensaje(mensaje: boolean) {
    this.visibilidadRegistro = mensaje;
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

  async correcto(): Promise<Boolean> {
    let existe: Boolean = false;

    this.passwords.forEach((n) => {
      if (n === this.password) {
        existe = true;
      }
    });

    return existe;
  }
}
