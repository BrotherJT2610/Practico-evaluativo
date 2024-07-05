import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPComponent } from './pages/inicio-p/inicio-p.component';

const routes: Routes = [
  {
    path:"",component: InicioPComponent
  },
  {
    path:"inicio-p",component:InicioPComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
