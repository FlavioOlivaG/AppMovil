import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletaVentaPageRoutingModule } from './boleta-venta-routing.module';

import { BoletaVentaPage } from './boleta-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletaVentaPageRoutingModule
  ],
  declarations: [BoletaVentaPage]
})
export class BoletaVentaPageModule {}
