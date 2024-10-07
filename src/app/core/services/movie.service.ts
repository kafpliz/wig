import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EMovie } from '../../shared/enums/movie.enum';
import { IMovie } from '../../data/interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseServiceService{

  getMovie(id:number){
    return this.http.get<IMovie>(EMovie.url /* + `/${id}` */)
  }
}
