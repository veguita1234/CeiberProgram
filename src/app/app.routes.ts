// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './PaginaPrincipal/PaginaPrincipal.component'; // Asegúrate de ajustar el path

export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },  // Ruta para la página principal
  { path: '**', redirectTo: '', pathMatch: 'full' }    // Redirige cualquier ruta no válida a la principal
];
