import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { Apartado1Component } from './pages/apartado1/apartado1.component';
import { Apartado2Component } from './pages/apartado2/apartado2.component';


@NgModule({
  declarations: [
    Apartado1Component,
    Apartado2Component
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
