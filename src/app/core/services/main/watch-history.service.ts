import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { EWatchHistory } from '../../../shared/enums/watch-history.enum';
import { BaseServiceService } from '../base-service.service';
import { IWathHistory } from '../../../data/interfaces/wath-history.interface';

@Injectable({
  providedIn: 'root'
})
export class WatchHistoryService extends BaseServiceService{
  
  getHistory(){
    return  this.htpp.get<IWathHistory[]>(EWatchHistory.url)
  }
}
