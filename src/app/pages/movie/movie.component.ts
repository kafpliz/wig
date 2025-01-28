import { Component, inject } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute, RouterLink, } from '@angular/router';
import { IMovie } from '../../data/interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { ratingProcent } from '../../shared/utils/utils';
import { ThemeService } from '../../core/services/theme.service';
import { BackButtonComponent } from "../back-button/back-button.component";
import { ErrorComponent } from "../error/error.component";
import { RoundToNearestPipe } from '../../core/pipes/round-to-nearest.pipe';
import { DataSharedService } from '../../core/services/data-shared.service.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterLink, ErrorComponent, RoundToNearestPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  #service = inject(MovieService)
  #route = inject(ActivatedRoute)
  #dataShared = inject(DataSharedService)
  movie!: IMovie;
  ratingStars: number[] = []
  themeService = inject(ThemeService)
  isApi:boolean = true
  isFavourite:boolean = false
  ngOnInit() {
    this.#route.params.subscribe(param => {
      const movieID = param['id']
      this.#service.getMovie(movieID).subscribe(data => {
        this.movie = data;
        if (this.movie?.rating) {
          this.ratingStars = ratingProcent(this.movie.rating)

        }
      }, error=> {
        if(error){
          this.isApi = false
        }
      })
    })
    this.themeService.getTheme()
  }

  send(){
      this.#service.sendFilm(this.movie?.link).subscribe(data=>{
        this.#service.close()
    })
  }

  copy(){
    navigator.clipboard.writeText(window.location.href).then(()=> {
        this.#dataShared.changeMessage('Скопировано')
    })
  }

  addFavourites(){
    this.#dataShared.changeMessage('Добавлено')
    this.isFavourite = true
  }

  checkRatingStyle():string{
    return this.movie.rating >= 7 ? '#8FD14F' : this.movie.rating <= 6 ? '#DA0063' : '#FAC710'
  }
}
