import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './component/card/card.component';
import { InicioPComponent } from './pages/inicio-p/inicio-p.component';

//componentes de material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CardComponent,
    InicioPComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
