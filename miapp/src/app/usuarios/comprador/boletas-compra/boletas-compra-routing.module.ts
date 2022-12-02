import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletasCompraPage } from './boletas-compra.page';

const routes: Routes = [
  {
    path: '',
    component: BoletasCompraPage
  },
  {
    path: 'det-boleta',
    loadChildren: () => import('./det-boleta/det-boleta.module').then( m => m.DetBoletaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletasCompraPageRoutingModule {}
