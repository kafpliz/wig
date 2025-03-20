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
    const params = new HttpParams().set('id', id).set('user', this.tg.getUserId() ).set('limitPersons', 32)
    return this.http.get<IMovie>(EMovie.url, { params })
  }

  sendFilm(fl?: string) {
    const filmLink = fl
    const params = new HttpParams().set('id', this.tg.getUserId()).set('film', this.#filmId)
    return this.http.get(EMovie.urlS, { params })
  }
  addFavourite(id: number) {
    return this.http.post(EMovie.urlFavor, {
      user:this.tg.getUserId(),
      film: id
    })
  }
  delFavourite(id: number) {
    return this.http.delete(EMovie.urlFavor + `${this.tg.getUserId()}/` + id)
  }
  close() {
    return this.tg.close()
  }
}
