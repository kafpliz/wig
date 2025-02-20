import { Component, input } from '@angular/core';
import { IRating } from '../../../../data/interfaces/movie.interface';
import { RoundToNearestPipe } from '../../../../core/pipes/round-to-nearest.pipe';

@Component({
  selector: 'app-movie-rating',
  standalone: true,
  imports: [RoundToNearestPipe],
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.scss'
})
export class MovieRatingComponent {
  data = input<IRating>()
}
