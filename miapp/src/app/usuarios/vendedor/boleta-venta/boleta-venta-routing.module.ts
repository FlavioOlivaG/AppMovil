import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletaVentaPage } from './boleta-venta.page';

const routes: Routes = [
  {
    path: '',
    component: BoletaVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletaVentaPageRoutingModule {}
