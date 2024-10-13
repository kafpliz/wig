import { CUSTOM_ELEMENTS_SCHEMA, Component, inject, input } from '@angular/core';
import { ITopMovie } from '../../../../data/interfaces/top-movie.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoundToNearestPipe } from '../../../../core/pipes/round-to-nearest.pipe';

@Component({
  selector: 'app-top-movie',
  standalone: true,
  imports: [RouterLink,CommonModule, RoundToNearestPipe],
  templateUrl: './top-movie.component.html',
  styleUrl: './top-movie.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopMovieComponent {
  items= input<ITopMovie[]>()

  ngOnInit() {
  
  }
  getRatingClass(rating:number):string {
    if(rating >= 7){
      return 'rating-positive'
    } else {
      return 'rating-negative'
    }
  }
}
