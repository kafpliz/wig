import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EFavourite } from '../../shared/enums/favourite.enum';
import { ISearchCard } from '../../data/interfaces/search-card.interface';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService extends BaseServiceService {

  getFavourite(){
    return this.http.get<ISearchCard[]>(EFavourite.url)
  }
}
