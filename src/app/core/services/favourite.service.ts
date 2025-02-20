import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EFavourite } from '../../shared/enums/favourite.enum';
import { HttpParams } from '@angular/common/http';
import { IFavourite } from '../../data/interfaces/favourite.interface';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService extends BaseServiceService {

  getFavourite(){
    
    const params = new HttpParams().set('user', this.tg.getUserId() )
    return this.http.get<IFavourite>(EFavourite.url, {params})
  }
}
