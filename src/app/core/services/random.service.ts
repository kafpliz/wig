import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { ERandom } from '../../shared/enums/random.enum';
import { IRandom } from '../../data/interfaces/random.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomService extends BaseServiceService {

  getRandom(genres: string[]) {
    const params = new HttpParams()
    if (genres.length > 0) {



      return this.htpp.post<IRandom>(ERandom.url, { genres })
    } else {
      console.log(500);

      return this.htpp.get<IRandom>(ERandom.url)
    }

  }
}
