import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { LibroPagesComponent } from './pages/libro-pages/libro-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LibroPagesComponent
  ],
  imports: [
    CommonModule,
    LibroRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule, 
  FormsModule


  ]
})
export class LibroModule { }
