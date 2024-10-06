import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service.service';
import { IPopularMovie } from '../../../data/interfaces/popular-movie.interface';
import { EPopularMovie } from '../../../shared/enums/popular-movie.enum';


@Injectable({
  providedIn: 'root'
})
export class PopularMovieService extends BaseServiceService {

  getPopularMovie(){
    return this.htpp.get<IPopularMovie[]>(EPopularMovie.url)
  }
}
