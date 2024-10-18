import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { ESerch } from '../../shared/enums/search.enum';
import { ISearchCard } from '../../data/interfaces/search-card.interface';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseServiceService {

  postData(name: string) {
    const params = new HttpParams().set('name', name)

    return this.http.get<ISearchCard[]>(ESerch.url, { params })
  }
}
