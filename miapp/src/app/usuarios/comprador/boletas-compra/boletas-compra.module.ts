import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletasCompraPageRoutingModule } from './boletas-compra-routing.module';

import { BoletasCompraPage } from './boletas-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletasCompraPageRoutingModule
  ],
  declarations: [BoletasCompraPage]
})
export class BoletasCompraPageModule {}
