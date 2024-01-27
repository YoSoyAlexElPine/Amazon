import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
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

  <body>
    

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

    </body>

  `,
  styles: `

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f1f4fd;
}
.container {
  max-width: 1200px;
  width: 95%;
}
.slider-wrapper {
  position: relative;
}
.slider-wrapper .slide-button {
  position: absolute;
  top: 50%;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  z-index: 5;
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 2.2rem;
  background: #000;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transform: translateY(-50%);
}
.slider-wrapper .slide-button:hover {
  background: #404040;
}
.slider-wrapper .slide-button#prev-slide {
  left: -25px;
  display: none;
}
.slider-wrapper .slide-button#next-slide {
  right: -25px;
}
.slider-wrapper .image-list {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 18px;
  font-size: 0;
  list-style: none;
  margin-bottom: 30px;
  overflow-x: auto;
  scrollbar-width: none;
}
.slider-wrapper .image-list::-webkit-scrollbar {
  display: none;
}
.slider-wrapper .image-list .image-item {
  width: 325px;
  height: 400px;
  object-fit: cover;
}
.container .slider-scrollbar {
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
.slider-scrollbar .scrollbar-track {
  background: #ccc;
  width: 100%;
  height: 2px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  position: relative;
}
.slider-scrollbar:hover .scrollbar-track {
  height: 4px;
}
.slider-scrollbar .scrollbar-thumb {
  position: absolute;
  background: #000;
  top: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  cursor: grab;
  border-radius: inherit;
}
.slider-scrollbar .scrollbar-thumb:active {
  cursor: grabbing;
  height: 8px;
  top: -2px;
}
.slider-scrollbar .scrollbar-thumb::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  bottom: -10px;
}
/* Styles for mobile and tablets */
@media only screen and (max-width: 1023px) {
  .slider-wrapper .slide-button {
    display: none !important;
  }
  .slider-wrapper .image-list {
    gap: 10px;
    margin-bottom: 15px;
    scroll-snap-type: x mandatory;
  }
  .slider-wrapper .image-list .image-item {
    width: 280px;
    height: 380px;
  }
  .slider-scrollbar .scrollbar-thumb {
    width: 20%;
  }
}




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
