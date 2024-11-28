// src/app/app.component.ts

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { HomeRoutingModule } from "./modules/home/home-routing.module";


@Component({
  selector: 'app-root',
  //declarations: [AppComponent],
  standalone: true,
 
  imports: [
   CommonModule, HomeRoutingModule, HttpClientModule,
  ],

  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'courses_onlines';
  }
