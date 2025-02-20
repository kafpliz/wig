import { Component, inject } from '@angular/core';
import { FavouriteService } from '../../core/services/favourite.service';
import { ThemeService } from '../../core/services/theme.service';
import { ISearch } from '../../data/interfaces/search-card.interface';
import { SeacrhCardComponent } from '../main/components/search/components/seacrh-card/seacrh-card.component';
import { IFavourite } from '../../data/interfaces/favourite.interface';
import { RoundToNearestPipe } from '../../core/pipes/round-to-nearest.pipe';
import { CommonModule } from '@angular/common';
import { SearchCardTypePipe } from '../../core/pipes/search-card-type.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [RoundToNearestPipe, CommonModule,SearchCardTypePipe, RouterLink],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent {
  #service = inject(FavouriteService)
  #theme = inject(ThemeService)
  favourite!: IFavourite
  ngOnInit() {
    this.#service.getFavourite().subscribe(data => {
      this.favourite = data
      console.log(this.favourite);
      
    })
    this.#theme.getTheme()
  }

  checkRatingStyle(rating:number): string {
    return rating >= 8.5 ? 'linear-gradient(250deg, rgba(241,255,0,1) 0%, rgba(255,0,0,1) 0%, rgba(255,0,189,1) 100%)': rating >= 7 ? '#8FD14F' : rating <= 6 ? 'red' : '#FAC710'
  }
}
