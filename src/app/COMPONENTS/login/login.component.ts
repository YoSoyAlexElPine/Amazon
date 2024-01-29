import { Component, Input, OnInit, getNgModuleById } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.services';
import Usuario from '../../interfaces/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
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
export class LoginComponent implements OnInit{
  
  usuarios: Observable<Usuario[]> = this.userServices.getUsers()
  nombres: string[] = [];
  passwords: string[] = [];

  constructor(
    private userServices: UsuarioService,
      ) {}

  ngOnInit(): void {
    this.usuarios.subscribe(usuarios => {
      usuarios.forEach(usuario => {
        
        this.nombres.push(usuario.nombre.toString())
        //console.log(usuario.nombre.toString())

      });
    });  


    this.usuarios.subscribe(usuarios => {
      usuarios.forEach(usuario => {
        
        this.passwords.push(usuario.password.toString())
        //console.log(usuario.nombre.toString())

      });
    });  
  
  
  
  
  }

  nombre = "";
  password = "";

  

  @Input() usuario: Usuario = {
    nombre: this.nombre,
    password: this.password
  }

  async registrarse() {

    const existe = await this.existe()
    

    //console.log(this.nombre)

    if (!existe) {
      this.usuario.nombre = this.nombre
      this.usuario.password = this.password


      this.userServices.addUser(this.usuario)

      console.log(this.nombre + " agregado :)")
    } else {
      console.log(this.nombre + " ya existe")
    }


  }


  async iniciarSesion() {

    const existe:Boolean = await this.existe()
    const correcto:Boolean = await this.correcto()


    if (existe) {
      if(correcto) {
        console.log('Te logeaste :O')
      } else {
        console.log('Password incorrecta :#')
      }

    } else {
      console.log(this.nombre + ' no fue encontrado :C')
    }



  }


  async existe(): Promise<Boolean> {

    let existe:Boolean = false

    this.nombres.forEach((n) => {
      if(n === this.nombre) {
        existe = true
      }
    })

     

    return existe
  }

  async correcto(): Promise<Boolean> {

    let existe:Boolean = false

    this.passwords.forEach((n) => {
      if(n === this.password) {
        existe = true
      }
    })

     

    return existe
  }


}