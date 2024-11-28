// src/app/modules/home/home.module.ts
import { CommonModule } from '@angular/common'; // Aquí se debe importar CommonModule
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({

  declarations: [],
  imports: [
    CommonModule,  // Correcto: reemplazar BrowserModule por CommonModule
    HomeRoutingModule,
    SharedModule

  ]
})
export class HomeModule {}
