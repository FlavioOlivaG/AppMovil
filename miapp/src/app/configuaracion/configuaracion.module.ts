import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguaracionPageRoutingModule } from './configuaracion-routing.module';

import { ConfiguaracionPage } from './configuaracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguaracionPageRoutingModule
  ],
  declarations: [ConfiguaracionPage]
})
export class ConfiguaracionPageModule {}
