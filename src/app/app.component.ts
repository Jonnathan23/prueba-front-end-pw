import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeudasComponent } from "./pages/deudas/deudas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeudasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pruebapwsaquicelajonnathna';
}
