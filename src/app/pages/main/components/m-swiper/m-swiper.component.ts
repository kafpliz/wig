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
  checkRatingStyle(rating:number): string {
    return rating >= 8.5 ? 'linear-gradient(250deg, rgba(241,255,0,1) 0%, rgba(255,0,0,1) 0%, rgba(255,0,189,1) 100%)': rating >= 7 ? '#8FD14F' : rating <= 6 ? 'red' : '#FAC710'
  }
 
}
