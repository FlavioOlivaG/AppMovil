import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetBoletaPage } from './det-boleta.page';

const routes: Routes = [
  {
    path: '',
    component: DetBoletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetBoletaPageRoutingModule {}
