import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BackButtonComponent } from "./pages/back-button/back-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, BackButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WIG';
}
