import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input } from '@angular/core';
import { IInnovation } from '../../../../data/interfaces/innovation.interface';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-innovation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './innovation.component.html',
  styleUrl: './innovation.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InnovationComponent {
  items = input<IInnovation[]>()


  ngOnInit() {
  
  }
  getRatingClass(rating:number):string {
    if(rating >= 7){
      return 'card_rating-positive'
    } else {
      return 'card_rating-negative'
    }
  }
}
