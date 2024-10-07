import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Importa RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,  // Marca este componente como independiente
  imports: [RouterOutlet],  // Importa RouterOutlet aquí
  template: '<router-outlet></router-outlet>',  // Esto mostrará la página principal dependiendo de las rutas
})
export class AppComponent {
  title = 'ceiberProgrm';
}
