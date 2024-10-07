import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EMain } from '../../shared/enums/main.enum';
import { IMain } from '../../data/interfaces/main.interface';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService extends BaseServiceService {

  getData() {
    return this.http.get<IMain>(EMain.url /* +`/${this.tg.getUserId()}` */).pipe(catchError(this.handleError))
  }
  sendError(error:HttpErrorResponse) {
    const url: string = `${error.url}`
    
    return this.http.post(url, { error })
  }

}
