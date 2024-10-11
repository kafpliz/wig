import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EMain } from '../../shared/enums/main.enum';
import { IMPing, IMain } from '../../data/interfaces/main.interface';
import { catchError } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { IInnovation } from '../../data/interfaces/innovation.interface';
import { map } from 'rxjs/operators';
import { ITopMovie } from '../../data/interfaces/top-movie.interface';
import { IPopularMovie } from '../../data/interfaces/popular-movie.interface';
import { IWathHistory } from '../../data/interfaces/wath-history.interface';


@Injectable({
  providedIn: 'root'
})
export class MainService extends BaseServiceService {

  checkPing() {
    return this.http.get<IMPing>(EMain.checkPing + `/${this.tg.getUserId()}`, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<IMPing>) => response.status)
      );
  }

  sendError(error: HttpErrorResponse) {
    const url: string = `${error.url}`

    return this.http.post(url, { error })
  }
  getInnovations() {
    return this.http.get<IInnovation[]>(EMain.innovations)
  }
  getTop() {
    return this.http.get<ITopMovie[]>(EMain.top)
  }
  getPopular() {
    return this.http.get<IPopularMovie[]>(EMain.popular)
  }
  getHistory() {
    return this.http.get<IWathHistory[]>(EMain.history + `/${this.tg.getUserId()}`)
  }
}
