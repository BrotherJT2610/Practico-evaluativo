import { Component } from '@angular/core';
//IMPORTAMOS LA INTERFAZ PARA CIUDAD
import { MaquinaDeGym } from 'src/app/models/maquina';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //PROPIEDAD PUBLICA --> TIPO ARRAY
  public info: MaquinaDeGym[];

  //INICIALIZAR LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        id: "",
        nombre: "BICICLETA INDOOR RANDERS MAX FC-58H",
        tipo: "Bicicleta",
        imagen: "https://acdn.mitiendanube.com/stores/001/175/201/products/img_1-41-e6440816df346847ad16125189919184-320-0.webp",
        descripcion: "$1.099.009,10"
      },

      {
        id: "",
        nombre: "CINTA MOTORIZADA LÍNEA HOGAR RANDERS ARG-366",
        tipo: "Cinta De Correr",
        imagen: "https://acdn.mitiendanube.com/stores/001/175/201/products/arg-3661-a5e0e69284ea048aba16597176117130-1024-10241-e57d01d21b7b3bfcaf16603096808593-320-0.webp",
        descripcion: "$319.200"
      },

      {
        id: "",
        nombre: "BICICLETA DE SPINNING ATHLETIC 400BS",
        tipo: "Bicicleta",
        imagen: "https://acdn.mitiendanube.com/stores/001/175/201/products/400bs11-0460c5c1d2e811f9a316832945209048-320-0.webp",
        descripcion: "$340.480"
      },
    ]
  }

  comprar() {
    alert('¡DEBES INICIAR SESION PARA PODER COMPRAR!');
  }

}
