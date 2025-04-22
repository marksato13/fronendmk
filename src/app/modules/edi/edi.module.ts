import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdiRoutingModule } from './edi-routing.module';
import { EdiPagesComponent } from './pages/edi-pages/edi-pages.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    EdiPagesComponent
  ],
  imports: [
    CommonModule,
    EdiRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class EdiModule { }
