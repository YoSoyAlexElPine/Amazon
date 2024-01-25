import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
<!-- app-home.component.html -->

  <div id="slides">
    <div id="overflow">
      <div class="inner">
        <div class="slide slide_1">
          <div class="slide-content">
            <img src="./assets/slider1.jpg" width="100%">
          </div>
        </div>

        <div class="slide slide_2">
          <div class="slide-content">
            <img src="./assets/slider2.jpg" width="100%">
          </div>
        </div>

        <div class="slide slide_3">
          <div class="slide-content">
            <img src="./assets/slider3.jpg" width="100%">
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
      <div class="slider-wrapper">
        <button id="prev-slide" class="slide-button material-symbols-rounded">
          chevron_left
        </button>
        <ul class="image-list">
          <img class="image-item" src="images/img-1.jpg" alt="img-1" />
          <img class="image-item" src="images/img-2.jpg" alt="img-2" />
          <img class="image-item" src="images/img-3.jpg" alt="img-3" />
          <img class="image-item" src="images/img-4.jpg" alt="img-4" />
          <img class="image-item" src="images/img-5.jpg" alt="img-5" />
          <img class="image-item" src="images/img-6.jpg" alt="img-6" />
          <img class="image-item" src="images/img-7.jpg" alt="img-7" />
          <img class="image-item" src="images/img-8.jpg" alt="img-8" />
          <img class="image-item" src="images/img-9.jpg" alt="img-9" />
          <img class="image-item" src="images/img-10.jpg" alt="img-10" />
        </ul>
        <button id="next-slide" class="slide-button material-symbols-rounded">
          chevron_right
        </button>
      </div>
      <div class="slider-scrollbar">
        <div class="scrollbar-track">
          <div class="scrollbar-thumb"></div>
        </div>
      </div>
    </div>

  `,
  styles: `


  #slider {
    margin: 0 auto;
    width: 800px;
    max-width: 100%;
  }


  #slider input[type=radio]{
    display: none;
  }

  #slider laber {
    cursor: pointer;
    text-decoration: none;
  }

  #slides {
    padding: 30px;
    position: relative;
    z-index: 1;
  }

  #overflow {
    width: 100%;
    overflow: hidden;
  }

  #slide1:checked ~ #slides .inner {
    margin-left: 0;
  }
  #slide2:checked ~ #slides .inner {
    margin-left: -100%;
  }
  #slide3:checked ~ #slides .inner {
    margin-left: -200%;
  }

#slides .inner {
  transition: margin-left 800ms cubic-bezier(0.770,0.000, 0.175, 1.000);
  width: 400%;
  line-height: 0;
  height: 200px;
}

#slides .slide {
  width: 25%;
  float: left;
  display: block;
  height: 100%;
}

#controls {
  margin: -130px 0 0 0;
  width: 100%;
  height: 50px;
  z-index: 3;
  position: relative;
}

#controls label {
  transition: opacity 0.2s easy-out;
  display: none;
  width: 50px;
  height: 50px;
  opacity: .4;
}

#controls label:hover {
  opacity: 1;
}

#slide1:checked ~ #controls label:ntd-last-child(2),
#slide2:checked ~ #controls label:ntd-last-child(3),
#slide3:checked ~ #controls label:ntd-last-child(1) {

  background: src="./assets/flecha_next.png" no-repeat;
  float: right;
  margin: 0 -50px 0 0;
  display: block;
}

#slide1:checked ~ #controls label:ntd-last-child(2),
#slide2:checked ~ #controls label:ntd-last-child(3),
#slide3:checked ~ #controls label:ntd-last-child(1) {

  background: src="./assets/flecha_atras.png" no-repeat;
  float: left;
  margin: 0 -50px 0 0;
  display: block;
}

#bullets {
  margin: 100px 0 0;
  text-align: center;
}

#bullets label {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin: 0 10px;

}

#slide1:checked ~ #bullets label:nth-chid(1),
#slide2:checked ~ #bullets label:nth-chid(2),
#slide3:checked ~ #bullets label:nth-chid(3) {

}















  `,
  
})
export class HomeComponent {
  // Variable para rastrear el índice actual del slider
  currentIndex = 0;

  // Función para avanzar al siguiente slide
  nextSlide() {
    if (this.currentIndex < 3) {  // Cambia 3 al número total de imágenes - 1
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  // Función para retroceder al slide anterior
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = 3;  // Cambia 3 al número total de imágenes - 1
    }
  }

}
