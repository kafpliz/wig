import { CUSTOM_ELEMENTS_SCHEMA, Component,  input } from '@angular/core';
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
  checkRatingStyle(rating:number): string {
    return rating >= 8.5 ? 'linear-gradient(250deg, rgba(241,255,0,1) 0%, rgba(255,0,0,1) 0%, rgba(255,0,189,1) 100%)': rating >= 7 ? '#8FD14F' : rating <= 6 ? 'red' : '#FAC710'
  }
}
