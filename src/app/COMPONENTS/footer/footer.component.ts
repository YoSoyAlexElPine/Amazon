import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <div class="container-boton">
      
      <button (click)="arriba()" >Volver arriba</button>

    </div>
    <div class="container">
          <img id="imagen" src="./assets/amazon-logo.png" height="50" />

    </div>
  `,
  styles: `
  body {
    width: 100%;
    margin: 0cm;
}
.container-boton {
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: rgb(52, 73, 94);

    ;
  }

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    background: #232e3f;
;
    margin: 0px;
  }

  button {
  width: 100%; /* Ocupar el ancho completo de su contenedor */
  padding: 10px; /* Ajusta el relleno según tus preferencias */
  background-color: #36465a; /* Color de fondo normal */
  color: #fff; /* Color del texto */

  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* Pseudo-clase :hover para el efecto al pasar el ratón */
  &:hover {
    background-color: #485668; /* Cambia el color de fondo al pasar el ratón */
  }
}

  `
})
export class FooterComponent {

  arriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
