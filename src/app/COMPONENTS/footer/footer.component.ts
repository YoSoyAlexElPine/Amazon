import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
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
    background: rgb(52, 73, 94);
    margin: 0px;
  }

  button {
  width: 100%; /* Ocupar el ancho completo de su contenedor */
  padding: 10px; /* Ajusta el relleno según tus preferencias */
  background-color: #3498db; /* Color de fondo normal */
  color: #fff; /* Color del texto */

  /* Estilos adicionales para dar un aspecto atractivo */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Transición suave del color de fondo */

  /* Pseudo-clase :hover para el efecto al pasar el ratón */
  &:hover {
    background-color: #2980b9; /* Cambia el color de fondo al pasar el ratón */
  }
}

  `
})
export class FooterComponent {

  arriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
