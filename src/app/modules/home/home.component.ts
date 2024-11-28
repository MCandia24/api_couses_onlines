import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
declare var $: any;
declare function HOMEINIT($: any): void;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor() {

        setTimeout(() => {
          HOMEINIT($);
        }, 50);
}
}
