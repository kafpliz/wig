import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { IInnovation } from '../../../../data/interfaces/innovation.interface';
import { RouterLink } from '@angular/router';
import { InnovationService } from '../../../../core/services/main/innovation.service';


@Component({
  selector: 'app-innovation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './innovation.component.html',
  styleUrl: './innovation.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InnovationComponent {
  items:IInnovation[] = []
  #service = inject(InnovationService)

  ngOnInit() {
    this.#service.getInnovation().subscribe(data => {

      this.items = data
    })
  }
  getRatingClass(rating:number):string {
    if(rating >= 7){
      return 'card_rating-positive'
    } else {
      return 'card_rating-negative'
    }
  }
}
