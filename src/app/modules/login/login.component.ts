import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/service/auth.service';

declare function _clickDoc():any;

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corregido
  imports: [FormsModule,AuthModule,AuthModule],
})

export class LoginComponent implements OnInit { 
 email:any = null;
  password:any = null;
  
  //public authService:AuthService | undefined;
 // constructor( public authService:AuthService) { }

 constructor(
  public authService: AuthService,
  public router: Router,
){}

  ngOnInit():void{
    setTimeout(()=>{
      _clickDoc();
    })
  };
/*
  login (){
    if(!this.email || !this.password){
      alert("Necesitas ingresar todos los campos")
      return;
    }
    this.authService?.login(this.email,this.password).subscribe((resp:any)=> {
      console.log(resp);
      if(resp){
       // window.location.reload(); //para que me redirija automaticamente a la pagina principal
        console.log("Respuesta:", resp);
      }else{
        alert("DATOS INCORRECTOS")
      }
    })
  }*/

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