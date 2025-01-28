import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  private messageSource = new BehaviorSubject<string>('')
  currentMessage = this.messageSource.asObservable( )
  changeMessage(message:string = 'Успешно!'){
    this.messageSource.next(message)
  }
}
