import { Component, inject } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute, RouterLink, } from '@angular/router';
import { IMovie } from '../../data/interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { ratingProcent } from '../../shared/utils/utils';
import { ThemeService } from '../../core/services/theme.service';
import { BackButtonComponent } from "../back-button/back-button.component";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterLink, BackButtonComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  #service = inject(MovieService)
  #route = inject(ActivatedRoute)
  movie: IMovie | null = null;
  ratingStars: number[] = []
  themeService = inject(ThemeService)
  ngOnInit() {
    this.#route.params.subscribe(param => {
      const movieID = param['id']
      this.#service.getMovie(movieID).subscribe(data => {
        this.movie = data;
        if (this.movie?.rating) {
          this.ratingStars = ratingProcent(this.movie.rating)

        }
      })
    })
    this.themeService.getTheme()
  }


}
