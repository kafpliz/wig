import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service.service';
import { ETopMovie } from '../../../shared/enums/top-movie.enum';
import { ITopMovie } from '../../../data/interfaces/top-movie.interface';



@Injectable({
  providedIn: 'root'
})
export class TopMovieService extends BaseServiceService {

 getTopMovie(){
  return this.htpp.get<ITopMovie[]>(ETopMovie.url)
 }

}
