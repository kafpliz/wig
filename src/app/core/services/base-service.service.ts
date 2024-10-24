import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { TelegramService } from './telegram.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  http = inject(HttpClient)
  tg = inject(TelegramService)


  handleError(error:HttpErrorResponse){
    console.log('base',error);
   

     return throwError(error);
  }
}
