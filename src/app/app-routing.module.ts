// src\app\app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  
  {
    path: '**',
    redirectTo: 'error/404', // Ruta comodín para errores 404
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes), // Uso de RouterModule en el módulo raíz
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}


