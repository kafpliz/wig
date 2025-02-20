import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { ECatalog } from '../../shared/enums/catalog.enum';
import { HttpParams } from '@angular/common/http';
import { ISearch } from '../../data/interfaces/search-card.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogService  extends BaseServiceService{

  getGenre(genre:string | null){
      console.log(genre);
      
    if(genre){
      let params = new HttpParams().set('query', genre).set('limit', 50)
      return this.http.get<ISearch>(ECatalog.url, {params})
    } else {
      let params = new HttpParams().set('query', 'биография').set('limit', 50)
      return this.http.get<ISearch>(ECatalog.url,{params} )
    }
   
  }
}
