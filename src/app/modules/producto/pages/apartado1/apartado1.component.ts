import { Component } from '@angular/core';

@Component({
  selector: 'app-apartado1',
  templateUrl: './apartado1.component.html',
  styleUrls: ['./apartado1.component.css']
})
export class Apartado1Component {
  images = [
    { src: 'assets/image1.jpg', description: 'Descripción de la imagen 1' },
    { src: 'assets/image2.jpg', description: 'Descripción de la imagen 2' },
    // Agrega más imágenes según sea necesario
  ];
}
