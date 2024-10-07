import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IPopularMovie } from '../../../../data/interfaces/popular-movie.interface';


@Component({
  selector: 'app-m-swiper',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './m-swiper.component.html',
  styleUrl: './m-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MSwiperComponent {
  slides= input<IPopularMovie[]>()
 
  ngOnInit() {
   

  }
}
