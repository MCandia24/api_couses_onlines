//src\app\app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
 
    { 
      path: '', 
      loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) 
    },
    { 
      path: 'auth', 
      loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) 
    },
    { 
      path: '**', 
      redirectTo: 'error/404' 
    }
  
  
  ];
  @NgModule({
    imports: [
      RouterModule.forRoot(routes), // Uso de RouterModule en el módulo raíz
    ],
    exports: [
      RouterModule,
    ],
  })
  export class AppRoutes {}
  
 