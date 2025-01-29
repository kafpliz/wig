import { Component, inject } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute, RouterLink, } from '@angular/router';
import { IMovie, IMovieGenresNominations, IMovieHeader } from '../../data/interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { ratingProcent } from '../../shared/utils/utils';
import { ThemeService } from '../../core/services/theme.service';
import { BackButtonComponent } from "../back-button/back-button.component";
import { ErrorComponent } from "../error/error.component";
import { RoundToNearestPipe } from '../../core/pipes/round-to-nearest.pipe';
import { DataSharedService } from '../../core/services/data-shared.service.service';
import { MoviePersonsComponent } from "./components/movie-persons/movie-persons.component";
import { MovieRatingComponent } from "./components/movie-rating/movie-rating.component";
import { MovieHeaderComponent } from "./components/movie-header/movie-header.component";
import { MovieGenresNominationsComponent } from "./components/movie-genres-nominations/movie-genres-nominations.component";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, ErrorComponent, MoviePersonsComponent, MovieRatingComponent, MovieHeaderComponent, MovieGenresNominationsComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  #service = inject(MovieService)
  #route = inject(ActivatedRoute)

  movie!: IMovie;
  ratingStars: number[] = []
  themeService = inject(ThemeService)
  isApi: boolean = true
  header!: IMovieHeader
  gen_nom!: IMovieGenresNominations
  ngOnInit() {
    this.#route.params.subscribe(param => {
      const movieID = param['id']
      this.#service.getMovie(movieID).subscribe(data => {
        this.movie = data;
        if (this.movie?.rating) {
          this.ratingStars = ratingProcent(this.movie.rating)

        }
        this.header = {
          name: this.movie.name,
          alternativeName: this.movie.alternativeName,
          year: this.movie.year,
          link: this.movie.link,
          rating: this.movie.rating,
        }
        this.gen_nom = {
          genres: this.movie.genres,
          lists: this.movie.lists,
        }
      }, error => {
        if (error) {
          this.isApi = false
        }
      })
    })
    this.themeService.getTheme()
  }

  send() {
    this.#service.sendFilm(this.movie?.link).subscribe(data => {
      this.#service.close()
    })
  }

}
