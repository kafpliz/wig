import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EPersonalAccount } from '../../shared/enums/personal-account.enum';
import { IPersonalAccount } from '../../data/interfaces/personal-accaount.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonalAccountService extends BaseServiceService {

  getData(id:string){
    return this.htpp.get<IPersonalAccount>(EPersonalAccount.url /* + id */)
  }
}
