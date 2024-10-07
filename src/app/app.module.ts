// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './PaginaPrincipal/PaginaPrincipal.component'; // Asegúrate de ajustar el path
import { routes } from './app.routes'; // Importa tus rutas

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent  // Declara tu componente aquí
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
