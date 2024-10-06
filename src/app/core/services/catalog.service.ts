import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { ECatalog } from '../../shared/enums/catalog.enum';
import { HttpParams } from '@angular/common/http';
import { ISearchCard } from '../../data/interfaces/search-card.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogService  extends BaseServiceService{

  getGenre(genre:string, page:number){
    let params = new HttpParams().set('genre', genre).set('page', page)
    return this.htpp.get<ISearchCard[]>(ECatalog.url, {params})
  }
}
