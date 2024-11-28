import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})

export class AuthComponent {
  ngOnInit(): void {
    console.log('AuthComponent cargado');
  }
}
