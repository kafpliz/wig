import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EPersonalAccount } from '../../shared/enums/personal-account.enum';
import { IPersonalAccount } from '../../data/interfaces/personal-accaount.interface';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalAccountService extends BaseServiceService {

  getData(){
    return this.http.get<IPersonalAccount>(EPersonalAccount.url + `/${this.tg.getUserId()}`).pipe(catchError(this.handleError))
  }
  sendError(error:HttpErrorResponse) {
    const url: string = `${error.url}`
    
    return this.http.post(url, { error })
  }
}
