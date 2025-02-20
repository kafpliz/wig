import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { ESerch } from '../../shared/enums/search.enum';
import { ISearch} from '../../data/interfaces/search-card.interface';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseServiceService {

  postData(name: string) {
    const params = new HttpParams().set('query', name).set('user', this.tg.getUserId())

    return this.http.get<ISearch>(ESerch.url, { params })
  }
}
