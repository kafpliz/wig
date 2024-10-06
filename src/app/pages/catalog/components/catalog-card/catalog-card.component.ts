import { Component, input } from '@angular/core';
import { ISearchCard } from '../../../../data/interfaces/search-card.interface';
import { SearchCardTypePipe } from '../../../../core/pipes/search-card-type.pipe';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [SearchCardTypePipe],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.scss'
})
export class CatalogCardComponent {
  public card = input<ISearchCard>()
}
