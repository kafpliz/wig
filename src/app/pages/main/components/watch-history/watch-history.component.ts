import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { IWathHistory } from '../../../../data/interfaces/wath-history.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WatchHistoryService } from '../../../../core/services/main/watch-history.service';

@Component({
  selector: 'app-watch-history',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './watch-history.component.html',
  styleUrl: './watch-history.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WatchHistoryComponent {
  #service = inject(WatchHistoryService)
  public history: IWathHistory[] = []
  ngOnInit() {
    this.#service.getHistory().subscribe(data => {

      this.history = data
    })
  }
}
