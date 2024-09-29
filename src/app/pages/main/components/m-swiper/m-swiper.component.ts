import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ISwiperImg } from '../../../../data/interfaces/swiper.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-m-swiper',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './m-swiper.component.html',
  styleUrl: './m-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MSwiperComponent {
    slides = input<ISwiperImg[]>()

    ngOnInit(){
      console.log(this.slides());
      
    }
}
