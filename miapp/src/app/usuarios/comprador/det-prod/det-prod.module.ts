import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetProdPageRoutingModule } from './det-prod-routing.module';

import { DetProdPage } from './det-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetProdPageRoutingModule
  ],
  declarations: [DetProdPage]
})
export class DetProdPageModule {}
