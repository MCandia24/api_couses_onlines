
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { URL_SERVICIOS } from '../../../config/config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = null;
 token:any =null;

 constructor(
  public http: HttpClient,
  public router: Router,
  
) { 
  this.initAuth();
}

  initAuth(){
    if(localStorage.getItem("token")){
      this.user = localStorage.getItem("user");
      this.token = localStorage.getItem("token");
    }

  }
  login(email:string,password:string){
    let URL = `${URL_SERVICIOS}/auth/login`;
    return this.http.post(URL,{email: email, password: password}).pipe( 
      map((auth: any) => {
        // Guardar datos de autenticación localmente
        const result = this.savaLocalStorage(auth);
        console.log("Auth response:", auth); // Asegúrate de que este log esté fuera del return
        return result;
      }),
      
     //switchMap(() => this.getUserByToken()),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
    );

  }
  savaLocalStorage(auth:any){
    if (auth && auth.access_token) {
      localStorage.setItem("token", auth.access_token);
      localStorage.setItem("user", JSON.stringify(auth.user));
      return true;
    }
    return false;

  }
  register(){

  }
  Logout(){

  }
}
