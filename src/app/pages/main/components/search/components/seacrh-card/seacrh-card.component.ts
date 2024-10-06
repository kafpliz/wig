import { Component,input } from '@angular/core';
import {  ISearchCard } from '../../../../../../data/interfaces/search-card.interface';
import { SearchCardTypePipe } from '../../../../../../core/pipes/search-card-type.pipe';

@Component({
  selector: 'app-seacrh-card',
  standalone: true,
  imports: [SearchCardTypePipe],
  templateUrl: './seacrh-card.component.html',
  styleUrl: './seacrh-card.component.scss',
  schemas: []
})
export class SeacrhCardComponent {
   public card = input<ISearchCard>()
}
