import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EMovie } from '../../shared/enums/movie.enum';
import { IMovie } from '../../data/interfaces/movie.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseServiceService {
  #filmId: number = 0;
  getMovie(id: number) {
    this.#filmId = id
    return this.http.get<IMovie>(EMovie.url + `/${id}` + `/${/* this.tg.getUserId() */1805991962}`)
  }

  sendFilm(fl?: string) {
    const filmLink = fl
    const params = new HttpParams().set('id', this.tg.getUserId()).set('film', this.#filmId)
    return this.http.get(EMovie.urlS, { params })
  }
  addFavourite(id:number){
    const params = new HttpParams().set('id', this.tg.getUserId()).set('film', id)
    return this.http.get(EMovie.urlFavor, {params})
  }
  close() {
    return this.tg.close()
  }
}
