import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetProdPage } from './det-prod.page';

const routes: Routes = [
  {
    path: '',
    component: DetProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetProdPageRoutingModule {}
