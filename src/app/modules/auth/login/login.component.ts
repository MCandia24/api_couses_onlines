import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

declare function _clickDoc():any;

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corregido
  imports: [FormsModule],
})

export class LoginComponent implements OnInit { 
 email:any = null;
  password:any = null;
 constructor(
  public authService: AuthService,
  public router: Router,
){}

  ngOnInit():void{
    console.log('LoginComponent cargado');
    setTimeout(()=>{
      _clickDoc();
    })
  };


  login() {
    if (!this.email || !this.password) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    this.authService.login(this.email, this.password).subscribe((resp: any) => {
        console.log("Respuesta:", resp);
        if(resp){
          window.location.reload(); //para que me redirija automaticamente a la pagina principal
        }else{
        alert("DATOS INCORRECTOS")
      }
      }
    );
  }
  
}