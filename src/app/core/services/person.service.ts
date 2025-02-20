import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { EPersons } from '../../shared/enums/persons.enum';
import { IPersons } from '../../data/interfaces/person.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseServiceService {

  getPerson(id:string){
    const params = new HttpParams().set('id', id).set('limit', 120)
    return this.http.get<IPersons>(EPersons.url,{params})
  }
}
