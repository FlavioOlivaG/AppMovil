import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuTiendaPage } from './tu-tienda.page';

const routes: Routes = [
  {
    path: '',
    component: TuTiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuTiendaPageRoutingModule {}
