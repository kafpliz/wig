import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IPopularMovie } from '../../../../data/interfaces/popular-movie.interface';
import { RoundToNearestPipe } from '../../../../core/pipes/round-to-nearest.pipe';


@Component({
  selector: 'app-m-swiper',
  standalone: true,
  imports: [RouterLink, CommonModule, RoundToNearestPipe],
  templateUrl: './m-swiper.component.html',
  styleUrl: './m-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MSwiperComponent {
  slides = input<IPopularMovie[]>()

  ngOnInit() {


  }
  getRatingClass(rating:number):string {
    if(rating >= 7){
      return 'swiper-slide_rating-positive'
    } else {
      return 'swiper-slide_rating-negative'
    }
  }
 
}
