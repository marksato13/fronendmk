import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { AutorPagesComponent } from './pages/autor-pages/autor-pages.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AutorPagesComponent,
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    SharedModule,
    FormsModule, 
    

  ]
})
export class AutorModule { }

