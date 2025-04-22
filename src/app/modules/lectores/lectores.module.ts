import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LectoresRoutingModule } from './lectores-routing.module';
import { LectoresPagesComponent } from './pages/lectores-pages/lectores-pages.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
    LectoresPagesComponent
  ],
  imports: [
    CommonModule,
    LectoresRoutingModule,
    FormsModule,
    SharedModule,

  ]
})
export class LectoresModule { }
