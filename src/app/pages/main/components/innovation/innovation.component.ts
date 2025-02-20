import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input } from '@angular/core';
import { IInnovation } from '../../../../data/interfaces/innovation.interface';
import { RouterLink } from '@angular/router';
import { RoundToNearestPipe } from '../../../../core/pipes/round-to-nearest.pipe';



@Component({
  selector: 'app-innovation',
  standalone: true,
  imports: [CommonModule, RouterLink, RoundToNearestPipe],
  templateUrl: './innovation.component.html',
  styleUrl: './innovation.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InnovationComponent {
  items = input<IInnovation>()
  swiperConfig = {
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      
    }
  };

  ngOnInit() {
  
  }
 
  checkRatingStyle(rating:number): string {
    return rating >= 8.5 ? 'linear-gradient(250deg, rgba(241,255,0,1) 0%, rgba(255,0,0,1) 0%, rgba(255,0,189,1) 100%)': rating >= 7 ? '#8FD14F' : rating <= 6 ? 'red' : '#FAC710'
  }
}
