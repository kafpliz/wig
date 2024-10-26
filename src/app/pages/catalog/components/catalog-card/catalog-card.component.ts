import { Component, input } from '@angular/core';
import { ISearchCard } from '../../../../data/interfaces/search-card.interface';
import { SearchCardTypePipe } from '../../../../core/pipes/search-card-type.pipe';
import { CommonModule } from '@angular/common';
import { RoundToNearestPipe } from '../../../../core/pipes/round-to-nearest.pipe';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [SearchCardTypePipe, CommonModule,RoundToNearestPipe],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.scss'
})
export class CatalogCardComponent {
  public card = input<ISearchCard>()

  getRatingClass(rating:any): string {
    if(rating >= 7){
      return 'card_rating-positive'
    } else {
      return 'card_rating-negative'
    }
  }
}
