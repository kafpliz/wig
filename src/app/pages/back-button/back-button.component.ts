import { Location } from '@angular/common';
import { Component, inject,input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {
  #location = inject(Location)
  catalog = input<boolean>(true)
 

  locationBack() {
    this.#location.back()
  }
}
