import { Component, inject } from '@angular/core';
import { FavouriteService } from '../../core/services/favourite.service';
import { ThemeService } from '../../core/services/theme.service';
import { ISearchCard } from '../../data/interfaces/search-card.interface';
import { SeacrhCardComponent } from '../main/components/search/components/seacrh-card/seacrh-card.component';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [SeacrhCardComponent],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent {
  #service = inject(FavouriteService)
  #theme = inject(ThemeService)
  favourite!: ISearchCard[]
  ngOnInit() {
    this.#service.getFavourite().subscribe(data => {
      this.favourite = data
    })
    this.#theme.getTheme()
  }
}
