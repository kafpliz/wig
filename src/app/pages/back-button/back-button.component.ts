import { Location } from '@angular/common';
import { Component, inject,input } from '@angular/core';
import { Router } from '@angular/router';

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
  #router = inject(Router)
  locationBack() {
    console.log(this.catalog());
    
    if(this.catalog() == true){
      this.#router.navigate(['/'])
    } else {
      this.#location.back()
    }
    
  }
}
