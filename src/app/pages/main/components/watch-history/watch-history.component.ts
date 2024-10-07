import { CUSTOM_ELEMENTS_SCHEMA, Component, inject, input } from '@angular/core';
import { IWathHistory } from '../../../../data/interfaces/wath-history.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-watch-history',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './watch-history.component.html',
  styleUrl: './watch-history.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WatchHistoryComponent {
  public history = input<IWathHistory[]>()

  ngOnInit() {
    
  }
}
