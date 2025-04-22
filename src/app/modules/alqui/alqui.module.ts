import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquiRoutingModule } from './alqui-routing.module';
import { AlquiPagesComponent } from './pages/alqui-pages/alqui-pages.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AlquiPagesComponent
  ],
  imports: [
    CommonModule,
    AlquiRoutingModule,
    SharedModule,
    FormsModule, 
  ]
})
export class AlquiModule { }
