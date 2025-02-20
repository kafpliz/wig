import { Component,input } from '@angular/core';
import {   ISearchCard} from '../../../../../../data/interfaces/search-card.interface';
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
   public card = input<any>()
    ngOnInit(){
        console.log(this.card());
        
    }
    checkRatingStyle(rating:number): string {
      return rating >= 8.5 ? 'linear-gradient(250deg, rgba(241,255,0,1) 0%, rgba(255,0,0,1) 0%, rgba(255,0,189,1) 100%)': rating >= 7 ? '#8FD14F' : rating <= 6 ? 'red' : '#FAC710'
    }
}
