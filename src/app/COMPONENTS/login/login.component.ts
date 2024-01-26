import { Component, Input } from '@angular/core';
import { User } from '../../INTERFACES/user.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
<form class="container">

  <label for="usuario">Usuario:</label>
  <input [(ngModel)]="nombre" type="text" id="usuario" name="usuario" required >

  <label for="password">Password:</label>
  <input [(ngModel)]="password" type="password" id="contrasena" name="contrasena" required>

  <button type="button" (click)="iniciarSesion()">Iniciar Sesión</button>
  <button type="button" (click)="registrarse()">Registrarse</button>
</form>


  `,
  styles: ` body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
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

  button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }`
})
export class LoginComponent {

  nombre = ""
  password = ""

  @Input() usuario = {
    nombre: this.nombre,
    password: this.password
  }

  registrarse() {
    this.usuario.nombre = this.nombre
    this.usuario.password = this.password
  }


  iniciarSesion() {
    throw new Error('Method not implemented.');
  }
}