import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarProductosPage } from './agregar-productos.page';
import { AgregarProductosPageRoutingModule } from './agregar-productos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarProductosPageRoutingModule
  ],
  declarations: [AgregarProductosPage]
})
export class AgregarProductosPageModule {}
