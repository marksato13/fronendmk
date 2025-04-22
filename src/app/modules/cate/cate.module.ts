import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CateRoutingModule } from './cate-routing.module';
import { CatePagesComponent } from './pages/cate-pages/cate-pages.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatePagesComponent
  ],
  imports: [
    CommonModule,
    CateRoutingModule,
    SharedModule,
    FormsModule, 

  ]
})
export class CateModule { }
