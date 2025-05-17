import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { DirectivaComponent } from "./components/directiva/directiva.component";
import { ClientesComponent } from "./components/clientes/clientes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent, DirectivaComponent, ClientesComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clientes-app';
  curso = 'Ang 7 xD';
}
