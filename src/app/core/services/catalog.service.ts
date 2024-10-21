import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { ECatalog } from '../../shared/enums/catalog.enum';
import { HttpParams } from '@angular/common/http';
import { ISearchCard } from '../../data/interfaces/search-card.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogService  extends BaseServiceService{

  getGenre(genre:string){
    
    if(genre){
      let params = new HttpParams().set('name', genre)
      return this.http.get<ISearchCard[]>(ECatalog.url, {params})
    } else {
      let params = new HttpParams().set('name', 'биография')
      return this.http.get<ISearchCard[]>(ECatalog.url,{params} )
    }
   
  }
}
