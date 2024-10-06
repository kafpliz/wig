import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service.service';
import { EInnovation } from '../../../shared/enums/innovation.enum';
import { IInnovation } from '../../../data/interfaces/innovation.interface';


@Injectable({
  providedIn: 'root'
})
export class InnovationService extends BaseServiceService {

  getInnovation(){
    return this.htpp.get<IInnovation[]>(EInnovation.url)
  }
}
