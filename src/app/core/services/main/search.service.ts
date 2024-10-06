import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service.service';
import { ESerch } from '../../../shared/enums/search.enum';
import { ISearchCard } from '../../../data/interfaces/search-card.interface';


@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseServiceService {

  postData(name:string){
    return this.htpp.post<ISearchCard[]>(ESerch.url, {name})
  }
}
