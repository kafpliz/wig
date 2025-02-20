import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EMain } from '../../shared/enums/main.enum';
import { IMPing, IMain } from '../../data/interfaces/main.interface';
import { forkJoin } from 'rxjs';
import { HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
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
    const params = new HttpParams().set('user', this.tg.getUserId())

    return this.http.get<IMPing>(EMain.checkPing   , { observe: 'response', params })
      .pipe(
        map((response: HttpResponse<IMPing>) => response.status)
      );
  }
  getMain() {
    const params = new HttpParams().set('user', this.tg.getUserId() ).set('top', 'top250')
    return forkJoin([
      this.http.get<IInnovation>(EMain.innovations),
      this.http.get<ITopMovie>(EMain.top, {params}), 
      this.http.get<IPopularMovie>(EMain.popular),
     // this.http.get<IWathHistory>(EMain.history  + `/${this.tg.getUserId() 12313 }`  ) 
 ]
    ).pipe(
      map(([data1, data2, data3, /* data4 */]) => ({ innovation: data1, top_movie:data2 ,  popular_movie: data3,  /* history: data4 */ }))
    )
  }

  sendError(error: HttpErrorResponse) {
    const url: string = `${error.url}`

    return this.http.post(url, { error })
  }

}
