import { Component,input } from '@angular/core';
import {  ISearchCard } from '../../../../../../data/interfaces/search-card.interface';
import { SearchCardTypePipe } from '../../../../../../core/pipes/search-card-type.pipe';
import { RoundToNearestPipe } from '../../../../../../core/pipes/round-to-nearest.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seacrh-card',
  standalone: true,
  imports: [SearchCardTypePipe, RoundToNearestPipe, CommonModule],
  templateUrl: './seacrh-card.component.html',
  styleUrl: './seacrh-card.component.scss',
  schemas: []
})
export class SeacrhCardComponent {
   public card = input<ISearchCard>()
    ngOnInit(){
      
    }
   getRatingClass(rating:any): string {
    if(rating >= 7){
      return 'card_rating-positive'
    } else {
      return 'card_rating-negative'
    }
  }
}
