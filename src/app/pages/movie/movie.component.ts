import { Component, inject } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute, RouterLink, } from '@angular/router';
import { IMovie,  IMovieHeader, INominationsCategories, IRating } from '../../data/interfaces/movie.interface';
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
import { MovieSkeletonComponent } from './components/movie-skeleton/movie-skeleton.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, ErrorComponent, MoviePersonsComponent, MovieRatingComponent, MovieHeaderComponent, MovieGenresNominationsComponent, MovieSkeletonComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  #service = inject(MovieService)
  #route = inject(ActivatedRoute)

  movie!: IMovie;
  ratingStars: number[] = []
  themeService = inject(ThemeService)
  isApi: boolean = false
  header!: IMovieHeader
  rating!:IRating
  gen_nom!: INominationsCategories
  poster!:string | null;
  loaded = false

  ngOnInit() {
    this.#route.params.subscribe(param => {
      const movieID = param['id']

      this.#service.getMovie(movieID).subscribe(data => {
        this.movie = data;

        const film = data;
        if (this.movie?.data.film.rating.kp) {
          this.ratingStars = ratingProcent(this.movie.data.film.rating.kp)

        }
        this.header = {
          id: this.movie.data.film.id.kp,
          names: this.movie.data.film.names,
          year: this.movie.data.film.year,
          rating: this.movie.data.film.rating,
          url: data.data.film.url,
          isFav: data.data.film.favorite
        }
        console.log(this.header);
        
        this.rating = data.data.film.rating
        this.poster = data.data.film.pictures.poster.big
        this.gen_nom = {
          categories: this.movie.data.categories,
          nominations: this.movie.data.film.nominations,
        }
        this.isApi = true
        this.loaded = true
      }, error => {
        if (error) {
          this.isApi = false
        }
      })
    })
    this.themeService.getTheme()
  }

  send() {
    this.#service.sendFilm(this.movie?.data.film.url).subscribe(data => {
      this.#service.close()
    })
  }

}
