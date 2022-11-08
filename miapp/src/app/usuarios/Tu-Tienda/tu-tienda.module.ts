import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuTiendaPageRoutingModule } from './tu-tienda-routing.module';

import { TuTiendaPage } from './tu-tienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuTiendaPageRoutingModule
  ],
  declarations: [TuTiendaPage]
})
export class TuTiendaPageModule {}
