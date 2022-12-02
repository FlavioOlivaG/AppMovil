import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguaracionPage } from './configuaracion.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguaracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguaracionPageRoutingModule {}
