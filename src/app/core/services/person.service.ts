import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EPersons } from '../../shared/enums/persons.enum';
import { IPersons } from '../../data/interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseServiceService {

  getPerson(id:string){
    return this.http.get<IPersons>(EPersons.url)
  }
}
