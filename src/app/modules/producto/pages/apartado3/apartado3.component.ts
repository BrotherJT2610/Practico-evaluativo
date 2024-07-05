import { Component } from '@angular/core';
import { MaquinaDeGym } from 'src/app/models/maquina';

@Component({
  selector: 'app-apartado3',
  templateUrl: './apartado3.component.html',
  styleUrls: ['./apartado3.component.css']
})
export class Apartado3Component {
  // PROPIEDAD PUBLICA --> TIPO ARRAY
public info: MaquinaDeGym[];

// INICIALIZAR LA PROPIEDAD INFO
constructor() {
    this.info = [
        {
            id: "",
            nombre: "",
            tipo: "",
            imagen: "",
            descripcion: ""
        },
        {
            id: "",
            nombre: "",
            tipo: "",
            imagen: "",
            descripcion: ""
        },
        {
            id: "",
            nombre: "",
            tipo: "",
            imagen: "",
            descripcion: ""
        },
        {
            id: "",
            nombre: "",
            tipo: "",
            imagen: "",
            descripcion: ""
        },
        {
            id: "",
            nombre: "",
            tipo: "",
            imagen: "",
            descripcion: ""
        },
        {
            id: "",
            nombre: "",
            tipo: "",
            imagen: "",
            descripcion: ""
        }
    ];
}
comprar() {
  alert('¡DEBES INICIAR SESION PARA PODER COMPRAR!');
}

}
