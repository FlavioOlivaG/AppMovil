import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetBoletaPageRoutingModule } from './det-boleta-routing.module';

import { DetBoletaPage } from './det-boleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetBoletaPageRoutingModule
  ],
  declarations: [DetBoletaPage]
})
export class DetBoletaPageModule {}
