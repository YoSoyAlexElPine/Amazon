import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="slider" style="text-align: center;">
    <ng-image-slider (imageClick)="showIndex($event)" [images]="imgCollection" [imageSize]="{width: '100%', height: '80%'}" #nav></ng-image-slider>
  </div>
    <p>Fin slider</p>
  `,
  styles: [`
    .slider {
      width: 80%;
      height: 100%;
      margin: 0 auto;
    }
  `],
})
export class HomeComponent implements OnInit{
  showIndex(number: number) {
    console.log('index: ', number);
  }
  
  constructor() { }

  ngOnInit(): void {  

  }

  imgCollection: Array<object> = [
    {
      thumbImage: './assets/slider1.jpg',
      alt: null,
      title: null
    }, {
      image: './assets/slider2.jpg',
      thumbImage: './assets/slider2.jpg'
    }, {
      image: './assets/slider3.jpg',
      thumbImage: './assets/slider3.jpg'
    }
  ];
}
