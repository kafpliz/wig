import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { IInnovationCard } from '../../../../data/interfaces/swiper.interface';

@Component({
  selector: 'app-innovation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './innovation.component.html',
  styleUrl: './innovation.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InnovationComponent {
  cards = input<IInnovationCard[]>()
}
