import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletasCompraPage } from './boletas-compra.page';

const routes: Routes = [
  {
    path: '',
    component: BoletasCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletasCompraPageRoutingModule {}
