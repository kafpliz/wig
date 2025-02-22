import { Component, input } from '@angular/core';
import { ISearch, ISearchCard } from '../../../../data/interfaces/search-card.interface';
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

  checkRatingStyle(): string {
    return this.card()!.film.rating.kp >= 8.5 ? 'linear-gradient(250deg, rgba(241,255,0,1) 0%, rgba(255,0,0,1) 0%, rgba(255,0,189,1) 100%)': this.card()!.film.rating.kp >= 7 ? '#8FD14F' : this.card()!.film.rating.kp <= 6 ? 'red' : '#FAC710'
  }
}
