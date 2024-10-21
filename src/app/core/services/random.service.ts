import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { ERandom } from '../../shared/enums/random.enum';
import { IRandom } from '../../data/interfaces/random.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomService extends BaseServiceService {

    getRandom(genres: string) {

      if (genres.length > 1) {
        const params = new HttpParams().set('genre', genres)
      
        return this.http.get<IRandom>(ERandom.url, { params })
      } else {
        return this.http.get<IRandom>(ERandom.url,)
      }






    }
}
